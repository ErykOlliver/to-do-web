import { useState } from 'react'
import './App.css'

type AuthMode = 'Sign In' | 'Sign Up';

function App() {
  const [email, setMail] = useState("")
  const [password, setPass] = useState("")
  const [authMode, setAuthMode] = useState<AuthMode>('Sign In')
  const [errorMsg, setErro] = useState("")

  const sendForm = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setErro("Email ou senha incorretos")
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}: falha no login`)
      }

      const data = await response.json()

      console.log("Enviado")

      if (response.ok && data.success) {
        console.log("✅ Login Efetuado com Sucesso!", data)
        setErro(`✅ Login Efetuado com Sucesso! ${data.user.email}`),
          alert(`seja Bem vindo: ${data.token}`)
      } else {
        setErro(data.message || 'Erro ao fazer login')
      }

    } catch (err: any) {
      console.log(`Erro detectado!: ${err}`)
      setErro('Erro ao conectar ao servidor!  ')
    }
  }

  const render = () => {
    switch (authMode) {
      case 'Sign In':
        return (
          <form className='gap-4.5 flex flex-col bg-white border-black/40 h-fit border w-1/4 py-8 px-5 items-center justify-center' action="" method="post">
            <h2 className='text-4xl'>Acessar Conta</h2>
            <div className='flex w-full gap-1.5 flex-col items-start justify-between'>
              <label htmlFor="" className='text-2xl w-full'> E-mail</label>
              <input type="email" value={email} onChange={(e) => setMail(e.target.value)} placeholder='example@gmail.com' name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50'></input>
            </div>
            <div className='flex w-full gap-1.5 flex-col items-start justify-between'>
              <label htmlFor="" className='text-2xl w-full'> Senha</label>
              <input type="text" value={password} onChange={(e) => setPass(e.target.value)} placeholder='Ex. 12345678910' name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50' />
            </div>
            <div className='w-full flex flex-col gap-1.5'>
              <hr className='w-full' />
              <button onClick={sendForm} className='p-5 hover:cursor-pointer border w-full bg-orange-400 text-white text-2xl font-bold'>Acessar</button>
            </div>
            <p>Não é cadastrado? <a onClick={() => setAuthMode('Sign Up')} className='font-bold text-orange-400 hover:cursor-pointer underline'>Crie sua conta</a></p>
          </form>
        )
      case 'Sign Up':
        return (
          <form className='gap-4.5 flex flex-col bg-white border-black/40 h-fit border w-1/4 py-8 px-5 items-center justify-center' action="" method="post">
            <h2 className='text-4xl'>Cadastrar Conta</h2>
            <div className='flex w-full gap-1.5 flex-col items-start justify-between'>
              <label htmlFor="" className='text-2xl w-full'> Nome</label>
              <input type="text" placeholder='Seu nome completo' name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50' />
            </div>
            <div className='flex w-full gap-1.5 flex-col items-start justify-between'>
              <label htmlFor="" className='text-2xl w-full'> E-mail</label>
              <input type="email" value={email} onChange={(e) => setMail(e.target.value)} placeholder='example@gmail.com' name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50' />
            </div>
            <div className='flex w-full gap-1.5 flex-col items-start justify-between'>
              <label htmlFor="" className='text-2xl w-full'> Senha</label>
              <input type="text" value={password} onChange={(e) => setPass(e.target.value)} placeholder='Ex. 12345678910' name="" id="" className='w-full text-lg focus:outline-none bg-gray-200/70 p-2.5 text-black/50' />
            </div>
            <div className='w-full flex flex-col gap-1.5'>
              <hr className='w-full' />
              <button onClick={sendForm} className='p-5 hover:cursor-pointer border w-full bg-orange-400 text-white text-2xl font-bold'>Cadastrar</button>
            </div>
            <p>Já possui uma conta? <a onClick={() => setAuthMode('Sign In')} className='font-bold text-orange-400 hover:cursor-pointer underline'>Acesse sua conta</a></p>
          </form>
        )
    }
  }

  return (
    <section className='w-screen h-screen flex-col gap-5 justify-center flex items-center'>
      {render()}
      {errorMsg && (
        <div>{errorMsg}</div>
      )}
    </section>
  )
}

export default App
