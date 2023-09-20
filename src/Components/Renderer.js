import React from 'react';
import { useParams} from 'react-router-dom';

const generatePage = page => {
    const component = () => require(`./Body/${page}`).default;
    try{
      return React.createElement(component())  
    }
    catch(error){
        console.warn(error)
        return React.createElement(() => 404)
    }
}
export default function Renderer() {
    const {page} = useParams();
    return generatePage(page)
}