import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
// import save-html-as-image as any typescript
// const { saveAsPng } = require('save-html-as-image');
import { toPng } from 'html-to-image';

export async function handleDownload(title: string, id: string){
  if (!document || !id) return;

    // remove the # from the id
    const idElement = id.replace('#', '');
    const node = document?.getElementById(idElement)!;

    await toPng(node, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${title}.png`;
        link.href = dataUrl;
        link.click();
        // reload page to remove cache
        if(id == '#thumbnail-alura-mais'){
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Erro ao baixar imagem');
      })
    return

  // html2canvas(document?.querySelector(id)!).then(canvas => {
  //   saveAs(canvas.toDataURL(), `${title}.png`);
  // });
};