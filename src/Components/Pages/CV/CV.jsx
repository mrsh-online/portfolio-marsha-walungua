import FilePreview from "reactjs-file-preview";

export default function CV({lang}){
  return(<section className="cv" id="cv">
    
            {lang ==="fr" ?
              <a href="/portfolio-marsha-walungua/CV.pdf" target="_blank">Télécharger mon CV</a>
            :
            <a href="/portfolio-marsha-walungua/CV.pdf" target="_blank">Download Resume</a>
            }

    <FilePreview 
        preview={"/portfolio-marsha-walungua/CV.pdf"}
    />
    
  </section>)
}
