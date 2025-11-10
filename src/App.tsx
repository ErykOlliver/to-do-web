import './App.css'

function App() {

  return (
    <section className='w-screen h-screen flex-col gap-5 justify-center flex items-center'>
      {/* <h1 className='text-7xl uppercase font-bold'>To-do Web</h1> */}
      <form className='gap-4.5 flex flex-col bg-white border-black/40 h-fit border w-1/4 py-8 px-5 items-center justify-center' action="" method="post">
        <h2 className='text-4xl'>Acessar Conta</h2>
        {/* <div className='flex w-full gap-1.5 flex-col items-start justify-between'>
          <label htmlFor="" className='text-2xl w-full'> Nome</label>
          <input type="text" name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50' />
        </div> */}
        <div className='flex w-full gap-1.5 flex-col items-start justify-between'>
          <label htmlFor="" className='text-2xl w-full'> E-mail</label>
          <input type="email" name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50' />
        </div>
        <div className='flex w-full gap-1.5 flex-col items-start justify-between'>
          <label htmlFor="" className='text-2xl w-full'> Senha</label>
          <input type="text" name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50' />
        </div>
        <div className='w-full flex flex-col gap-1.5'>
          <hr className='w-full' />
          <button className='p-5 hover:cursor-pointer border w-full bg-orange-400 text-white text-2xl font-bold'>Criar Conta</button>
        </div>
      </form>
    </section>
  )
}

export default App
