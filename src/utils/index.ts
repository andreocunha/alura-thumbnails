import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
// import save-html-as-image as any typescript
const { saveAsPng } = require('save-html-as-image');

export function handleDownload(title: string, id: string){
  if (!document || !id) return;

  if(id == '#thumbnail-alura-mais'){
    const node = document?.getElementById('thumbnail-alura-mais')!;
    saveAsPng(node, { filename: `${title}`, printDate: false });
    return
  }

  html2canvas(document?.querySelector(id)!).then(canvas => {
    saveAs(canvas.toDataURL(), `${title}.png`);
  });
};