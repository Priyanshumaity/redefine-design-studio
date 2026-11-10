"""
Builds the website's image set from the raw project folder.

Reads renders out of plain image files, .pptx decks and PDFs (cropping
presentation boards where needed), then writes responsive WebP files to
public/images/projects/<slug>/ and a manifest to src/data/images.generated.json.

Usage (from the website/ folder):
    python -E -P scripts/prepare_images.py "../Redefining architecture website"

Requires: Pillow, PyMuPDF  (pip install pillow pymupdf)
"""
import io
import json
import os
import sys
import zipfile

from PIL import Image, ImageOps

try:
    import pymupdf
except ImportError:  # older installs expose the module as fitz
    import fitz as pymupdf

Image.MAX_IMAGE_PIXELS = None

SRC = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else '../Redefining architecture website')
HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(HERE, '..', 'public', 'images', 'projects')
MANIFEST = os.path.join(HERE, '..', 'src', 'data', 'images.generated.json')
WIDTHS = (640, 1280, 2000)
QUALITY = 78

WEBDATA = 'WEBSITE DATA.pptx'
HOTEL = 'Interiors/Hotel Interiors/hotel interiors.pptx'
CURVE_PDF = 'Residentila High End Luxury/The Curve/Redefining Architecture-1st 4 pages curve.pdf'
AMTALA_PDF = 'MSME Industrial Parks/MSME_ Amtala/AMATALA INDUSTRIAL PARK FOR 25.37 ACRES.pdf'
CLUB_PDF = 'Interiors/Proposed Club Interiors/Kolkata Club Concept (1) (1).pdf 30 MB.pdf'
OMC = 'Health Care/Medical college and Teaching Hospital-Bhubaneswar-(others)/'
DIAG = 'Health Care/Proposed diagnostic centre at Puri/Diagnostic Centre at Puri.pptx'
ECO = 'IT-office buildings/Ecostation-IT-office Building -Kolkta (others)/Presentation6.pptx'
AUTO = 'Mixed Commercial/Autohub-office- Car showroom-workshop/Presentation2.pptx'
EXPO = 'Hospitality/Exhibtion Centre-Kolkata/exhibition centre-kolkta.pptx'
VILLA = 'Villas/Murshidabad Villa/LUXURY VILLA IN  MURSHIDABAD.pptx'


# Source spec helpers ---------------------------------------------------------
def f(path):                      return ('file', path)
def pp(path, member):             return ('pptx', path, member)
def pdfimg(path, xref):           return ('pdfimg', path, xref)
def pdfcrop(path, page, box):     return ('pdfcrop', path, page, box)   # box = page fractions
def crop(inner, box):             return ('crop', inner, box)           # box = source pixels
def slide(inner):                 return ('slide', inner)               # strip slide header/footer
def board(inner):                 return ('board', inner)               # drop the title band of a portfolio board


PROJECTS = {
    'the-curve': [
        pdfcrop(CURVE_PDF, 0, (0.2108, 0.1499, 0.6167, 0.4995)),
        f('Residentila High End Luxury/The Curve/High end luxury building-01.jpeg'),
        pdfcrop(CURVE_PDF, 0, (0.2042, 0.5135, 0.6167, 0.8501)),
        pdfcrop(CURVE_PDF, 0, (0.6333, 0.1499, 0.9842, 0.4995)),
        pdfcrop(CURVE_PDF, 0, (0.6333, 0.5135, 0.9842, 0.8501)),
        pdfcrop(CURVE_PDF, 0, (0.0158, 0.1499, 0.1975, 0.4995)),
    ],
    'the-duet': [
        f('Residentila High End Luxury/The Duet/Elevation_Ballygunge Road side_Night_HighRes.jpg'),
        f('Residentila High End Luxury/The Duet/Aerial.jpg'),
        f('Residentila High End Luxury/The Duet/Elevation_Ballygunge Road side_Day_HighRes.jpg'),
        pdfcrop(CURVE_PDF, 4, (0.5858, 0.1370, 0.9958, 0.4347)),
        pdfcrop(CURVE_PDF, 4, (0.4775, 0.4800, 0.9958, 0.8576)),
    ],
    'housing-enclave': [
        f('Residential- Housing/Rajarhat housing/rajarhat housing-01.jpeg'),
        f('Residential- Housing/Rajarhat housing/Rajarhat Housing-02.jpeg'),
        f('Residential- Housing/Rajarhat housing/Rajarhat Housing-022.jpeg'),
        f('Residential- Housing/Rajarhat housing/Rajarhaut housing-00.jpeg'),
    ],
    'prana-housing': [
        pp(WEBDATA, 'ppt/media/image10.JPG'),
        pp(WEBDATA, 'ppt/media/image11.JPG'),
        pp(WEBDATA, 'ppt/media/image12.JPG'),
        board(pp(WEBDATA, 'ppt/media/image9.jpg')),
    ],
    'luxury-villa': [
        pp(VILLA, 'ppt/media/image3.jpg'),
        pp(VILLA, 'ppt/media/image1.jpeg'),
        pp(VILLA, 'ppt/media/image2.jpeg'),
    ],
    'villa-in-progress': [
        f('Villas/Residential-Mixed/V1.jpg'),
        f('Villas/Residential-Mixed/V2.jpg'),
        f('Villas/Residential-Mixed/V3.jpg'),
    ],
    'medical-college': [
        slide(f(OMC + 'OMC 3D Views_10-02-2022_page-0006.jpg')),
        slide(f(OMC + 'OMC 3D Views_10-02-2022_page-0007.jpg')),
        slide(pp(OMC + 'hospital project-Odisha.pptx', 'ppt/media/image4.jpg')),
        slide(f(OMC + 'OMC 3D Views_10-02-2022_page-0009.jpg')),
        slide(pp(OMC + 'hospital project-Odisha.pptx', 'ppt/media/image7.jpg')),
        slide(f(OMC + 'OMC 3D Views_10-02-2022_page-0013.jpg')),
    ],
    'diagnostic-centre': [
        pp(DIAG, 'ppt/media/image3.jpg'),
        pp(DIAG, 'ppt/media/image6.jpg'),
        pp(DIAG, 'ppt/media/image2.jpeg'),
        pp(DIAG, 'ppt/media/image5.jpeg'),
    ],
    'exhibition-centre': [
        pp(EXPO, 'ppt/media/image5.JPG'),
        pp(EXPO, 'ppt/media/image6.JPG'),
        pp(EXPO, 'ppt/media/image4.JPG'),
        board(pp(EXPO, 'ppt/media/image2.jpg')),
    ],
    'hotel-interiors': [
        pp(HOTEL, 'ppt/media/image2.jpg'),
        pp(HOTEL, 'ppt/media/image1.jpg'),
        pp(HOTEL, 'ppt/media/image3.jpg'),
        pp(HOTEL, 'ppt/media/image6.jpg'),
        pp(HOTEL, 'ppt/media/image7.jpg'),
        pp(HOTEL, 'ppt/media/image4.jpg'),
        pp(HOTEL, 'ppt/media/image9.jpg'),
    ],
    'residence-amenities': [
        f('Interiors/High End Luxury Building Interiors/Club Lobby.jpg.jpeg'),
        f('Interiors/High End Luxury Building Interiors/Resident_s Hall.jpg.jpeg'),
        f('Interiors/High End Luxury Building Interiors/Reception.jpg'),
        f('Interiors/High End Luxury Building Interiors/Lift Lobby.jpg.jpeg'),
        f('Interiors/High End Luxury Building Interiors/Gym.jpeg'),
    ],
    'club-interiors': [
        pdfimg(CLUB_PDF, 258),   # rooftop pool
        pdfimg(CLUB_PDF, 233),   # event hall
        pdfimg(CLUB_PDF, 100),   # meeting room
        pdfimg(CLUB_PDF, 133),   # bar
        pdfimg(CLUB_PDF, 173),   # card room
        pdfimg(CLUB_PDF, 200),   # party area
        pdfimg(CLUB_PDF, 283),   # jacuzzi
        pdfimg(CLUB_PDF, 316),   # gym
    ],
    'eco-station': [
        crop(pp(ECO, 'ppt/media/image1.jpg'), (27, 115, 527, 870)),
        crop(pp(ECO, 'ppt/media/image1.jpg'), (27, 878, 530, 1030)),
        crop(pp(ECO, 'ppt/media/image1.jpg'), (575, 522, 982, 750)),
        board(pp(ECO, 'ppt/media/image1.jpg')),
    ],
    'autohub': [
        pp(AUTO, 'ppt/media/image2.jpg'),
        pp(AUTO, 'ppt/media/image3.JPG'),
        pp(AUTO, 'ppt/media/image4.JPG'),
        board(pp(AUTO, 'ppt/media/image1.jpg')),
    ],
    'industrial-park': [
        pdfimg(AMTALA_PDF, 38),
        pdfimg(AMTALA_PDF, 35),
        pdfimg(AMTALA_PDF, 25),
    ],
    'college-campus': [
        crop(pp(WEBDATA, 'ppt/media/image17.jpg'), (800, 405, 1446, 677)),
        crop(pp(WEBDATA, 'ppt/media/image17.jpg'), (800, 125, 1442, 402)),
        board(pp(WEBDATA, 'ppt/media/image18.jpg')),
    ],
}


# Loading -----------------------------------------------------------------------
_pdf_cache = {}


def _pdf(path):
    if path not in _pdf_cache:
        _pdf_cache[path] = pymupdf.open(os.path.join(SRC, path))
    return _pdf_cache[path]


def trim_white(im, thresh=238, pad=0):
    """Crop away near-white margins."""
    g = ImageOps.invert(im.convert('L')).point(lambda v: 255 if v > 255 - thresh else 0)
    box = g.getbbox()
    if not box:
        return im
    x0, y0, x1, y1 = box
    return im.crop((max(0, x0 - pad), max(0, y0 - pad), min(im.width, x1 + pad), min(im.height, y1 + pad)))


def trim_density(im, thresh=232, frac=0.04):
    """Crop to rows/columns where a meaningful share of pixels is non-white."""
    g = im.convert('L')
    w, h = g.size
    px = g.load()
    step = 4
    def dense_cols():
        return [x for x in range(0, w, step) if sum(1 for y in range(0, h, step) if px[x, y] < thresh) > frac * h / step]
    def dense_rows():
        return [y for y in range(0, h, step) if sum(1 for x in range(0, w, step) if px[x, y] < thresh) > frac * w / step]
    cols, rows = dense_cols(), dense_rows()
    if not cols or not rows:
        return im
    return im.crop((cols[0], rows[0], min(w, cols[-1] + step), min(h, rows[-1] + step)))


def load(spec):
    kind = spec[0]
    if kind == 'file':
        im = Image.open(os.path.join(SRC, spec[1]))
    elif kind == 'pptx':
        with zipfile.ZipFile(os.path.join(SRC, spec[1])) as z:
            im = Image.open(io.BytesIO(z.read(spec[2])))
    elif kind == 'pdfimg':
        data = _pdf(spec[1]).extract_image(spec[2])
        im = Image.open(io.BytesIO(data['image']))
    elif kind == 'pdfcrop':
        page = _pdf(spec[1])[spec[2]]
        r = page.rect
        x0, y0, x1, y1 = spec[3]
        clip = pymupdf.Rect(r.x0 + x0 * r.width, r.y0 + y0 * r.height, r.x0 + x1 * r.width, r.y0 + y1 * r.height)
        pix = page.get_pixmap(dpi=480, clip=clip)
        im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
        im = trim_white(im)
    elif kind == 'crop':
        im = load(spec[1]).crop(spec[2])
    elif kind == 'slide':
        im = load(spec[1]).convert('RGB')
        w, h = im.size
        im = trim_density(im.crop((0, int(h * 0.075), w, int(h * 0.885))), frac=0.25)
    elif kind == 'board':
        im = load(spec[1]).convert('RGB')
        w, h = im.size
        im = trim_white(im.crop((0, int(h * 0.098), w, h)))
    else:
        raise ValueError(kind)
    im = ImageOps.exif_transpose(im)
    return im.convert('RGB')


def main():
    manifest = {}
    total = 0
    for slug, specs in PROJECTS.items():
        d = os.path.join(OUT_DIR, slug)
        os.makedirs(d, exist_ok=True)
        entries = []
        for i, spec in enumerate(specs, 1):
            im = load(spec)
            name = f'{i:02d}'
            widths = [w for w in WIDTHS if w < im.width] + [min(im.width, WIDTHS[-1])]
            widths = sorted(set(widths))
            for w in widths:
                h = round(im.height * w / im.width)
                out = im if w == im.width else im.resize((w, h), Image.LANCZOS)
                p = os.path.join(d, f'{name}-{w}.webp')
                out.save(p, 'WEBP', quality=QUALITY, method=6)
                total += os.path.getsize(p)
            entries.append({'name': name, 'w': im.width, 'h': im.height, 'widths': widths})
            print(f'{slug}/{name}  {im.width}x{im.height}  -> {widths}')
        manifest[slug] = entries
    os.makedirs(os.path.dirname(MANIFEST), exist_ok=True)
    with open(MANIFEST, 'w', encoding='utf8') as fh:
        json.dump(manifest, fh, indent=1)
    print(f'\nwrote {MANIFEST}\ntotal {total / 1e6:.1f} MB')


if __name__ == '__main__':
    main()
