import React from "react"

class ErrorBoundary extends React.Component {
    
   
    state = { 
        hasError: false,
        errorMessage: ""
    };
  
    static getDerivedStateFromError(error) {
      // Atualiza o state para que a próxima renderização mostre a UI alternativa.
      return {
           hasError: true,
           errorMessage: error.message
         };
    }
  
    componentDidCatch(error, errorInfo) {
      // Você também pode registrar o erro em um serviço de relatórios de erro
     // logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // Você pode renderizar qualquer UI alternativa
        return <h1>Ops ocorreu um erro : {this.state.errorMessage} </h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;