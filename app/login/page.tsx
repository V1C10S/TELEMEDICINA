"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <main className="min-h-screen bg-gray-200 font-sans flex items-center justify-center">

      {/* Card central */}
      <div className="bg-white rounded-2xl shadow-md w-[500px] p-10 relative overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(135deg, #2a9d8a, transparent)",
          }}
        />

        <div className="relative z-10">

          {/* Logo */}
          <div
            onClick={() => router.push("/landing")}
            className="flex items-center gap-3 cursor-pointer mb-8"
          >
            <Image
              src="/images/landing/telemed.png"
              alt="logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-[#2a9d8a]">
              MED CONNECT
            </span>
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold mb-2 text-[#2a9d8a]">
            Entrar
          </h1>

          <p className="text-gray-600 mb-6">
            Acesse sua conta para agendar consultas
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                border border-[#2a9d8a]/30
                rounded-lg px-4 py-3
                outline-none
                text-[#2a9d8a]
                placeholder:text-gray-400
                focus:border-[#2a9d8a]
                focus:ring-2 focus:ring-[#2a9d8a]/30
                transition
              "
              required
            />

            {/* SENHA */}
            <input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                border border-[#2a9d8a]/30
                rounded-lg px-4 py-3
                outline-none
                text-[#2a9d8a]
                placeholder:text-gray-400
                focus:border-[#2a9d8a]
                focus:ring-2 focus:ring-[#2a9d8a]/30
                transition
              "
              required
            />

            {/* BOTÃO */}
            <button
              type="submit"
              className="
                bg-[#2a9d8a]
                text-white
                py-3 rounded-lg
                font-semibold
                transition
                hover:scale-[1.02]
                hover:brightness-110
              "
            >
              Entrar
            </button>
          </form>

          {/* Ações */}
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <button className="hover:text-[#2a9d8a] transition">
              Esqueci minha senha
            </button>

            <button
              onClick={() => router.push("/cadastro")}
              className="hover:text-[#2a9d8a] transition"
            >
              Criar conta
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}