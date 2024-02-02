const texts = [
	{
		id: 1,
		text: "Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития."
	},
	{
		id: 2,
		text: "Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий."
	},
	{
		id: 3,
		text: "Не следует, однако забывать, что сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации форм развития. Задача организации, в особенности же консультация с широким активом в значительной степени обуславливает создание форм развития. Задача организации, в особенности же консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач."
	},
	{
		id: 4,
		text: "Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Товарищи! сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации соответствующий условий активизации. Таким образом укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития."
	}
];



const btnsNodeList = document.querySelectorAll('.btns button');

/*btnsNodeList.forEach(elem => {
    elem.addEventListener('click', event => {
        const btnIndex = [...btnsNodeList].indexOf(event.target);
        const text = texts.find(({id}) => id === btnIndex + 1).text; 
        const currentTextNode = document.querySelector('.current_text');
        currentTextNode.innerText = text;

    })
})*/

const btnsContainer = document.querySelector('.btn_container');
const currentTextNode = document.querySelector('.current_text');
texts.forEach(textObj => {
	const btn = document.createElement('button');
	btn.textContent = 'Текст' + textObj.id;
	btn.addEventListener('click', () => {
		currentTextNode.innerText = textObj.text;
	});
	btnsContainer.append(btn);
})

const leftButtonNode = document.getElementById('left-btn');
const rightButtonNode = document.getElementById('right');
let i = 0;

rightButtonNode.addEventListener('click', () => {
    i = (i + 1) % texts.length;
    const text = texts[i].text;
    const currentTextNode = document.querySelector('.current_text');
    currentTextNode.innerText = text;
})
leftButtonNode.addEventListener('click', () => {
    i = (i  - 1 + texts.length) % texts.length;
    const text = texts[i].text;
    const currentTextNode = document.querySelector('.current_text');
    currentTextNode.innerText = text;
})    