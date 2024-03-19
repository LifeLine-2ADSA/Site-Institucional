var members = [
    {
        name: "Amanda",
        category: "Front-End",
        description: "Desde o começo da minha jornada em tecnologia, sempre fui apaixonada pela área do Front-End. Gosto de me desafiar e aprender coisas novas e atualmente estou me aventurando na área de Dados.",
        photo: 'url(./assets/images/guedes.png)'
    },
    {
        name: "Carlos",
        category: "Full-Stack",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi eu aliquet ullamcorper. Pellentesque rutrum ante urna, nec finibus odio tempor sagittis. Aliquam vitae mollis tellus. Maecenas pharetra bibendum venenatis. Mauris quis placerat elit. Nulla vitae condimentum felis. In luctus a lorem a ultrices. Duis viverra, odio eget molestie mattis, dui leo accumsan dui, interdum auctor velit elit tincidunt leo.",
        photo: 'url(./assets/images/carlos.png)'
    },
    {
        name: "Gabriel",
        category: "Back-End",
        description: "Acredito que o único jeito de se desenvolver como pessoa é aperfeiçoar a capacidade de auxiliar os outros. Dessa forma, a LifeLine trabalha para ajudar as pessoas e, somente dessa forma, avaliamos nosso progresso.",
        photo: 'url(./assets/images/guedes.png)'
    },
    {
        name: "Kely",
        category: "Design",
        description: "A criatividade sempre andou lado a lado e é o que entiquecesse nosso projeto",
        photo: 'url(./assets/images/kely.png)'
    },
    {
        name: "Pedro",
        category: "Back-End",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi eu aliquet ullamcorper. Pellentesque rutrum ante urna, nec finibus odio tempor sagittis. Aliquam vitae mollis tellus. Maecenas pharetra bibendum venenatis. Mauris quis placerat elit. Nulla vitae condimentum felis. In luctus a lorem a ultrices. Duis viverra, odio eget molestie mattis, dui leo accumsan dui, interdum auctor velit elit tincidunt leo.",
        photo: 'url(./assets/images/pedro.png)'
    },
    {
        name: "Victor",
        category: "Front-End",
        description: "Tecnologia vai além de código ou componentes eletrônicos, se trata de tudo que a vida pode te oferecer de bom, seja ela lazer, diversão, pesssoas, união, etc. Por isso que eu me empenho todos os dias a dar isso a mim e minha família",
        photo: 'url(./assets/images/victor.png)'
    },
]

var membroAtual = 0;

function atualizarDados(membro) {
    nomeMembro.innerHTML = members[membro].name;
    categoria.innerHTML = members[membro].category;
    descricao.innerHTML = members[membro].description;
    fotoMembroTeam.style.backgroundImage = members[membro].photo
}

atualizarDados(membroAtual)

function proximoMembro() {
    membroAtual += 1;
    if (membroAtual == members.length) {
        membroAtual = 0;
    }

    atualizarDados(membroAtual);
}

function membroAnterior() {
    membroAtual -= 1;

    if (membroAtual == -1) {
        membroAtual = members.length - 1;
    }

    atualizarDados(membroAtual);

}

