import React, { useState, useEffect } from "react"
import { Plugins } from "@capacitor/core"

const { Elavon } = Plugins

function App() {
  const [message, setMessage] = useState("") // Состояние для хранения сообщения от плагина

  useEffect(() => {
    Elavon.echo({ value: "Hello, world!" })
      .then((response) => {
        // Сохраняем полученное сообщение в состояние
        setMessage(response.value)
      })
      .catch((error) => {
        // В случае ошибки выводим сообщение об ошибке
        setMessage(`Error: ${error.message}`)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* Отображаем сообщение на экране */}
        Message from plugin: {message}
      </header>
    </div>
  )
}

export default App
