{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function sendQuestion() \{\
    const userInput = document.getElementById('user-input');\
    const chatWindow = document.getElementById('chat-window');\
    const question = userInput.value;\
    userInput.value = ''; // Limpa o campo de entrada\
\
    if(question.trim() === '') return; // N\'e3o faz nada se a pergunta estiver vazia\
\
    // Adiciona a pergunta ao chat window\
    const userQuestionDiv = document.createElement('div');\
    userQuestionDiv.textContent = `Voc\'ea: $\{question\}`;\
    chatWindow.appendChild(userQuestionDiv);\
\
    // Configura\'e7\'f5es da chamada da API\
    const data = \{\
        prompt: question,\
        temperature: 0.7,\
        max_tokens: 150\
    \};\
\
    fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', \{\
        method: 'POST',\
        headers: \{\
            'Content-Type': 'application/json',\
            'Authorization': 'Bearer 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' // Substitua YOUR_API_KEY pelo seu token de acesso real\
        \},\
        body: JSON.stringify(data)\
    \})\
    .then(response => response.json())\
    .then(data => \{\
        const responseDiv = document.createElement('div');\
        responseDiv.textContent = `ChatGPT: $\{data.choices[0].text.trim()\}`;\
        chatWindow.appendChild(responseDiv);\
    \})\
    .catch(error => console.error('Erro na API:', error));\
\}\
}