import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
// import save-html-as-image as any typescript
// const { saveAsPng } = require('save-html-as-image');
import { toPng } from 'html-to-image';

export async function handleDownload(title: string, id: string){
  if (!document || !id) return;

  if(id == '#thumbnail-alura-mais'){
    const node = document?.getElementById('thumbnail-alura-mais')!;

    await toPng(node, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${title}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      })
    return
  }

  html2canvas(document?.querySelector(id)!).then(canvas => {
    saveAs(canvas.toDataURL(), `${title}.png`);
  });
};