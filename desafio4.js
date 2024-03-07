// Se eu entendi bem o desafio, a forma como eu resolveria o problema seria:

// => Ligar dois interruptores aleatórios por uns minutos;
// => Desligar um dos interruptores ligados;
// => Se as lâmpadas estiverem na mesma sala, ao chegar lá, posso verificar uma lâmpada ligada que corresponde ao interruptor ligado. Uma lâmpada desligada e fria, que corresponde ao interruptor que não foi ligado. E uma lâmpada desligada e quente, que corresponde ao interruptor que foi ligado e desligado;
// => Se as lâmpadas estiverem em salas separadas, já que tenho duas idas até elas, posso ir em duas salas aleatórias, e usando a mesma lógica de cima descobrir as ligações corretas (a sala não visitada pode ser deduzida usando a lógica por eliminação);
