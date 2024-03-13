var members = [
    {
        name: "Victor",
        category: "Front-End",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi eu aliquet ullamcorper. Pellentesque rutrum ante urna, nec finibus odio tempor sagittis. Aliquam vitae mollis tellus. Maecenas pharetra bibendum venenatis. Mauris quis placerat elit. Nulla vitae condimentum felis. In luctus a lorem a ultrices. Duis viverra, odio eget molestie mattis, dui leo accumsan dui, interdum auctor velit elit tincidunt leo."
    },
    {
        name: "Carlos",
        category: "Full-Stack",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi eu aliquet ullamcorper. Pellentesque rutrum ante urna, nec finibus odio tempor sagittis. Aliquam vitae mollis tellus. Maecenas pharetra bibendum venenatis. Mauris quis placerat elit. Nulla vitae condimentum felis. In luctus a lorem a ultrices. Duis viverra, odio eget molestie mattis, dui leo accumsan dui, interdum auctor velit elit tincidunt leo."
    },
    {
        name: "Kely",
        category: "Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi eu aliquet ullamcorper. Pellentesque rutrum ante urna, nec finibus odio tempor sagittis. Aliquam vitae mollis tellus. Maecenas pharetra bibendum venenatis. Mauris quis placerat elit. Nulla vitae condimentum felis. In luctus a lorem a ultrices. Duis viverra, odio eget molestie mattis, dui leo accumsan dui, interdum auctor velit elit tincidunt leo."
    },
    {
        name: "Amanda",
        category: "Front-End",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi eu aliquet ullamcorper. Pellentesque rutrum ante urna, nec finibus odio tempor sagittis. Aliquam vitae mollis tellus. Maecenas pharetra bibendum venenatis. Mauris quis placerat elit. Nulla vitae condimentum felis. In luctus a lorem a ultrices. Duis viverra, odio eget molestie mattis, dui leo accumsan dui, interdum auctor velit elit tincidunt leo."
    },
    {
        name: "Gabriel",
        category: "Back-End",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi eu aliquet ullamcorper. Pellentesque rutrum ante urna, nec finibus odio tempor sagittis. Aliquam vitae mollis tellus. Maecenas pharetra bibendum venenatis. Mauris quis placerat elit. Nulla vitae condimentum felis. In luctus a lorem a ultrices. Duis viverra, odio eget molestie mattis, dui leo accumsan dui, interdum auctor velit elit tincidunt leo."
    },
    {
        name: "Pedro",
        category: "Back-End",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi eu aliquet ullamcorper. Pellentesque rutrum ante urna, nec finibus odio tempor sagittis. Aliquam vitae mollis tellus. Maecenas pharetra bibendum venenatis. Mauris quis placerat elit. Nulla vitae condimentum felis. In luctus a lorem a ultrices. Duis viverra, odio eget molestie mattis, dui leo accumsan dui, interdum auctor velit elit tincidunt leo."
    },
]


var membroAtual = 0;

function atualizarDados(membro) {
    nomeMembro.innerHTML = members[membro].name;
    categoria.innerHTML = members[membro].category;
    descricao.innerHTML = members[membro].description;
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

