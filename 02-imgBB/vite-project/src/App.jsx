import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState(null)


  const handleFileChange = ({ target }) => {
    const [img] = target.files;
    setFile(img)
  };

  // const handleClick = async () => {
  //   if (!file) {
  //     alert("Selecione uma imagem primeiro!");
  //     return;
  //   };

  //   const formData = new FormData();
  //   formData.append("file_img", file);

  //   try {
  //     const response = await fetch("http://127.0.0.1:3001/users", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const result = await response.json();
  //     console.log("Sucesso:", result);
  //   } catch (error) {
  //     console.error("Erro ao enviar a imagem:", error);
  //   }
  // };


  const handleClick = async () => {
    if (!file) {
      alert("Selecione uma imagem primeiro!");
      return;
    }

    const formData = new FormData();
    formData.append("key", ""); // Substitua pela sua API Key do ImgBB
    formData.append("image", file);

    try {
      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Imagem enviada com sucesso!", result.data.url);

        // Agora você pode enviar `result.data.url` para o seu backend
        // fetch("http://127.0.0.1:3001/salvar_url", { method: "POST", body: JSON.stringify({ imageUrl: result.data.url }), headers: { "Content-Type": "application/json" } });

      } else {
        console.error("Erro ao enviar imagem:", result);
      }
    } catch (error) {
      console.error("Erro no upload:", error);
    }
  };

  return (
    <>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleClick}>Enviar</button>
      </div>
    </>
  )
}

export default App
