import { AdicionarProdutos } from "/Scripts/Produtos.web.js";

const AgendaParent = document.getElementById("Agendas");

const AgendaList_Ondas = [
    {name: "Agenda Ondas Roxa", rate: 4, price: 120.00 , image: "Agenda Ondas Roxo.png"},
    {name: "Agenda Ondas Azul", rate: 4, price: 120.00 , image: "Agenda Ondas Azul.png"},
    {name: "Agenda Ondas Verde Claro", rate: 4, price: 120.00, image: "Agenda Ondas Verde Claro.png"},
    {name: "Agenda Ondas Vermelha", rate: 4, price: 120.00, image: "Agenda Ondas vermelha.png"},
    {name: "Agenda Ondas Marrom", rate: 4, price: 120.00, image: "Agenda Ondas Marrom.png"},
];

const CadernoParent = document.getElementById("Cadernos")

const CadernoList_Liso = [
    {name: "Caderno Liso Preto e Branco", rate: 4, price: 120.00 , image: "cadereno liso  branco com preto.png"},
    {name: "Caderno Liso Amarelo", rate: 4, price: 120.00 , image: "cadereno liso amarelo.png"},
    {name: "Caderno Liso Azul", rate: 4, price: 120.00 , image: "cadereno liso azul.png"},
    {name: "Caderno Liso Laranja", rate: 4, price: 120.00 , image: "cadereno liso laranja.png"},
    {name: "Caderno Liso Roxo", rate: 4, price: 120.00 , image: "cadereno liso roxo.png"},
    {name: "Caderno Liso Ciano", rate: 4, price: 120.00 , image: "cadereno liso verde com azul.png"},
    {name: "Caderno Liso Vermelho", rate: 4, price: 120.00 , image: "cadereno liso vermelho.png"}
]

const CadernoList_Ondas = [
    {name: "Caderno Ondas Rosa", rate: 4, price: 120.00 , image: "caderno ondas rosa1.png"},
    {name: "Caderno Ondas Azul", rate: 4, price: 120.00 , image: "caderno ondas azul1.png"},
    {name: "Caderno Ondas Amarelo", rate: 4, price: 120.00 , image: "caderno ondas amarelo1.png"}
]

AdicionarProdutos(AgendaParent, AgendaList_Ondas)
AdicionarProdutos(CadernoParent, CadernoList_Liso)
AdicionarProdutos(CadernoParent, CadernoList_Ondas)