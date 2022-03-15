export const productos = [
  { id: '1', foto: 'https://images.unsplash.com/photo-1562097365-e24bb4c0479c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', categoria: 'Extrajudicial', name: "Consulta Presencial", price: "$4.663,00" },
  { id: '2', foto: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80', categoria: 'Extrajudicial', name: "Consulta Virtual", price: "$2.332,00" },
  { id: '3', foto: 'https://images.unsplash.com/photo-1633360821222-7e8df83639fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', categoria: 'Extrajudicial', name: "Carta Documento", price: "$4.663,00" },
  { id: '4', foto: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', categoria: 'Judicial', name: "Audiencia", price: "$23.315,00" },
  { id: '5', foto: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', categoria: 'Judicial', name: "Demanda Civil", price: "$46.630,00" },
]

const getFetch = new Promise((resolve, reject) => {
  let url = 'www.nolivosansano.com'
  if (url === 'www.nolivosansano.com') {
    setTimeout(() => {
      resolve(productos)
    }, 2000);
  } else {
    reject('400 not found')
  }
})

export default getFetch
