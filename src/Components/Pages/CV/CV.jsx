import FilePreview from "reactjs-file-preview";

export default function CV(){
  return(<section className="cv" id="cv">
    <a href="/CV.pdf" target="_blank">Télécharger mon CV</a>

    <FilePreview 
        preview={"/CV.pdf"}
    />
    
  </section>)
}
