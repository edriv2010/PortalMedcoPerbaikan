import React  from 'react';
class ImportScriptClass extends React.Component {
 
 ComponentDidMount(){
    //alert("dsds")
    //this.createScrptjs(this.props.resourceUrl)
 }
    
 
    createScrptjs=(resourceUrl) => {
        const script=document.createElement('script');
        script.src=resourceUrl;
        script.async=false;
        document.body.appendChild(script);
        //      alert("dsds")
        return () => {
            document.body.removeChild(script);
        }
    };

    render() {

  
        return (
            <>
            {this.props.resourceUrl}
            </>
            
        )}  
};
export default ImportScriptClass;
