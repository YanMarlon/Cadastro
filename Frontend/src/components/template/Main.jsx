import React from 'react'
import './Main.css'
import Header from './Header'
//Main será nosso executável
export default props =>//"componente pode retornar múltiplos elementos.Os fragmentos permitem agrupar uma lista de filhos sem adicionar nós extras ao Dom. Para usarmos o HEADER*/
<React.Fragment>
  <Header />
  <main className = "content">
    Conteúdo
  </main>
</React.Fragment>

