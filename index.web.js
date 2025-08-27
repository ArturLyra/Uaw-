import { AdicionarProdutos } from "/Scripts/Produtos.web.js";

const AgendaParent = document.getElementById("Agendas");

const AgendaList_Ondas = [
    {name: "Agenda Ondas Roxa", rate: 4, price: 120.00 , image: "Agenda Ondas Roxo.webp"},
    {name: "Agenda Ondas Azul", rate: 4, price: 120.00 , image: "Agenda Ondas Azul.webp"},
    {name: "Agenda Ondas Verde Claro", rate: 4, price: 120.00, image: "Agenda Ondas Verde Claro.webp"},
    {name: "Agenda Ondas Vermelha", rate: 4, price: 120.00, image: "Agenda Ondas vermelha.webp"},
    {name: "Agenda Ondas Marrom", rate: 4, price: 120.00, image: "Agenda Ondas Marrom.webp"},
];

const CadernoParent = document.getElementById("Cadernos")

const CadernoList_Liso = [
    {name: "Caderno Liso Preto e Branco", rate: 4, price: 120.00 , image: "cadereno liso  branco com preto.webp"},
    {name: "Caderno Liso Amarelo", rate: 4, price: 120.00 , image: "cadereno liso amarelo.webp"},
    {name: "Caderno Liso Azul", rate: 4, price: 120.00 , image: "cadereno liso azul.webp"},
    {name: "Caderno Liso Laranja", rate: 4, price: 120.00 , image: "cadereno liso laranja.webp"},
    {name: "Caderno Liso Roxo", rate: 4, price: 120.00 , image: "cadereno liso roxo.webp"},
    {name: "Caderno Liso Ciano", rate: 4, price: 120.00 , image: "cadereno liso verde com azul.webp"},
    {name: "Caderno Liso Vermelho", rate: 4, price: 120.00 , image: "cadereno liso vermelho.webp"}
]

const CadernoList_Ondas = [
    {name: "Caderno Ondas Rosa", rate: 4, price: 120.00 , image: "caderno ondas rosa1.webp"},
    {name: "Caderno Ondas Azul", rate: 4, price: 120.00 , image: "caderno ondas azul1.webp"},
    {name: "Caderno Ondas Amarelo", rate: 4, price: 120.00 , image: "caderno ondas amarelo1.webp"}
]

AdicionarProdutos(AgendaParent, AgendaList_Ondas)
AdicionarProdutos(CadernoParent, CadernoList_Liso)
AdicionarProdutos(CadernoParent, CadernoList_Ondas)