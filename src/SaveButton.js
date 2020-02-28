import React from 'react';
import htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas';
import download from 'downloadjs';

export default function SaveButton({childRef}) {
  function save() {
    console.log(childRef.current);
    htmlToImage.toPng(childRef.current)
    .then(function (dataUrl) {
      download(dataUrl, 'my-node.png');
    });
    html2canvas(childRef.current).then(function(canvas) {
      console.log(canvas);
      download(canvas.toDataURL(), 'file-name.png');
    });
  }

  return (
      <button onClick={save}>Save</button>
  );
}
