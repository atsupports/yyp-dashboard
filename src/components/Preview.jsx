import React,{useState} from 'react'

const Preview = ({file}) => {
    const [preview, setPreview] = useState(null)
    const render = new FileReader()
    render.readAsDataURL(file)
    render.onload = () => {
        setPreview(render.result)
    }
  return (
    <div>
        {preview ? <img src={preview} alt="preview" width="50px" height="50px" /> : "Loading..."}
    </div>
  )
}

export default Preview