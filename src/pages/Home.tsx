import '../App.css'

export default function home() {
  return (
    <section className='w-screen h-screen flex-col gap-5 justify-center flex items-center bg-white'>
      <div className='w-1/2 max-h-1/2 flex flex-col gap-5.5 py-5 px-10 shadow-lg bg-gray/90 border border-white items-center justify-center'>
        <div className='flex w-full gap-5'>
          <input type="text" placeholder='Insira sua tarefa' name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50' />
          <button className='p-2 hover:cursor-pointer border w-fit bg-orange-400 text-white text-sm font-bold'>Adicionar tarefa</button>
        </div>

        <div className='w-full h-full overflow-y-auto p-2.5'>
          <ul className=' flex flex-col gap-2.5'>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
            <li className='text-black/50 items-center bg-gray-200/70 shadow-xl border-white border-2 flex justify-between p-2.5'>
              <p>Tarefa 1</p>
              <div className='flex gap-2.5'>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-gray-300'>Editar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-red-300'>Deletar</button>
                <button className='text-black/40 hover:cursor-pointer p-1.5 bg-green-300'>Concluido</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
