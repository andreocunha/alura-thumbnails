import { ChatGPTClient } from "@waylaidwanderer/chatgpt-api";

export default async function handler(req: any, res: any) {
  const clientOptions = {
    modelOptions: {
      model: 'text-davinci-003',
      max_tokens: 700,
    },
    promptPrefix: `
Siga o exemplo abaixo e faça uma nova versão com os dados fornecidos:
# Titulo do projeto

App de simulação de um e-commerce para produtos naturais para o curso de personalização de UI no Android com Kotlin.

## 🔨 Funcionalidades do projeto

O App lista produtos com imagem, título, descrição e valor. Também, é possível cadastrar produtos. Todo armazenamento é mantido em memória do App, portanto, ao finalizar o App as informações são perdidas.

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas pra isso são:

- \`CardView\`: container para apresentar cada produto na lista de produtos
- \`RecyclerView\`: listagem das produtos
- \`ConstraintLayout\`: ViewGroup padrão para implementar todos os layouts
- \`ImageView\`: View para apresentar imagens no App
- \`Coil\`: carregar imagens via requisição HTTP
- \`View Binding\`: busca de views do layout de forma segura
- \`AlertDialog\`: Exibição de formulário para carregar novas imagens do produto
- \`Fontes personalizadas\`: configuração para adicionar novas fontes
- \`Extension functions\`: adicionar comportamentos em outras classes para reutilizá-los
- \`Personalização de tema\`: modificação de cores para o tema do App
    `,
    debug: false,
  };

  const cacheOptions = {};

  const { title, subtitle,escola } = req.body;

  try {
    const chatGptClient = new ChatGPTClient('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', clientOptions, cacheOptions);

    const response = await chatGptClient.sendMessage(`${title}, ${subtitle}, ${escola}`);
    // console.log(response);
  
    res.status(200).json({ result: response });
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}