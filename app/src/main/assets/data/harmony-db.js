window.CHORDLAB_HARMONY_DB={
 'Pop':[
  {type:'safe',name:'La segura',family:'Pop esencial',degrees:[0,4,5,3],note:'Una de las secuencias más reconocibles del pop moderno.',tags:['familiar','emocional']},
  {type:'variant',name:'La diferente',family:'Pop con movimiento',degrees:[0,5,3,4],note:'Conserva el lenguaje pop pero cambia el recorrido armónico.',tags:['fluida']},
  {type:'creative',name:'La creativa',family:'Pop melódico',degrees:[0,3,1,4],note:'Introduce ii para aumentar el movimiento hacia la dominante.',tags:['expresiva']},
  {type:'sophisticated',name:'La sofisticada',family:'Pop con color modal',spec:[{d:0},{d:5},{d:3,alter:-1,q:'maj7'},{d:4,q:'7'}],note:'Incluye un color prestado ♭VI antes de la dominante.',tags:['sorpresa','modal']}
 ],
 'Pop rock':[
  {type:'safe',name:'La segura',family:'Pop-rock clásico',degrees:[0,3,4,0],note:'Directa, estable y muy efectiva para estribillos.',tags:['familiar','potente']},
  {type:'variant',name:'La diferente',family:'Pop-rock abierto',degrees:[0,5,3,4],note:'Más emocional sin perder claridad.',tags:['melódica']},
  {type:'creative',name:'La creativa',family:'Pop-rock ascendente',degrees:[5,3,0,4],note:'Comienza desde el relativo menor para crear impulso.',tags:['energía']},
  {type:'sophisticated',name:'La sofisticada',family:'Rock modal',spec:[{d:0},{d:3},{d:5,alter:-1,q:'maj7'},{d:4,q:'7'}],note:'Un ♭VI mayor introduce un giro inesperado.',tags:['modal','sorpresa']}
 ],
 'Rock':[
  {type:'safe',name:'La segura',family:'Rock básico',degrees:[0,3,4,0],note:'Tónica, subdominante y dominante con sensación firme.',tags:['familiar']},
  {type:'variant',name:'La diferente',family:'Rock menor',degrees:[5,3,0,4],note:'Arranca en el relativo menor y vuelve a la tónica.',tags:['dramática']},
  {type:'creative',name:'La creativa',family:'Rock con ciclo',degrees:[0,4,5,1],note:'Añade ii para ampliar el movimiento.',tags:['dinámica']},
  {type:'sophisticated',name:'La sofisticada',family:'Rock modal',spec:[{d:0},{d:2},{d:3,alter:-1,q:'maj7'},{d:4,q:'7'}],note:'El ♭VI aporta un color oscuro antes de resolver.',tags:['modal','oscura']}
 ],
 'Indie':[
  {type:'safe',name:'La segura',family:'Indie melódico',degrees:[0,5,3,4],note:'Cíclica y emocional, ideal para guitarras arpegiadas.',tags:['familiar']},
  {type:'variant',name:'La diferente',family:'Indie abierto',degrees:[0,3,5,4],note:'Equilibra luminosidad y nostalgia.',tags:['nostálgica']},
  {type:'creative',name:'La creativa',family:'Indie suspendido',degrees:[0,2,5,4],note:'Más movimiento interno con ii.',tags:['etérea']},
  {type:'sophisticated',name:'La sofisticada',family:'Indie cromático',spec:[{d:0,q:'maj7'},{d:2,q:'m7'},{d:3,alter:-1,q:'maj7'},{d:4,q:'7'}],note:'El ♭VImaj7 crea un cambio de color cinematográfico.',tags:['cromática','modal']}
 ],
 'Blues':[
  {type:'safe',name:'La segura',family:'Blues · 12 compases básico',degrees:[0,0,0,0,3,3,0,0,4,3,0,0],bars:12,durations:[1,1,1,1,1,1,1,1,1,1,1,1],note:'La forma fundamental del blues de doce compases: I7 en los cuatro primeros compases, IV7 en 5–6, regreso a I7 en 7–8 y V7–IV7–I7–I7 para cerrar.',tags:['I · IV · V','12 compases','fundamental'],knowledge:['i-iv-v']}
  ,{type:'variant',name:'La diferente',family:'Blues · Quick change + turnaround',degrees:[0,3,0,0,3,3,0,0,4,3,0,4],bars:12,durations:[1,1,1,1,1,1,1,1,1,1,1,1],note:'Introduce IV7 en el compás 2 (quick change) y V7 en el último compás para dejar preparada la repetición.',tags:['quick change','turnaround','12 compases'],knowledge:['i-iv-v','quick-change','turnaround']}
  ,{type:'creative',name:'La creativa',family:'Blues · Variación ii–V',degrees:[0,3,0,0,3,3,0,0,1,4,0,4],bars:12,durations:[1,1,1,1,1,1,1,1,1,1,1,1],note:'Mantiene la forma de 12 compases, pero sustituye los compases 9–10 por ii menor → V para reforzar la preparación hacia la tónica.',tags:['ii–V','quick change','turnaround'],knowledge:['quick-change','ii-v','turnaround']}
  ,{type:'sophisticated',name:'La sofisticada',family:'Blues · Dominantes con color',spec:[{d:0,q:'9'},{d:3,q:'9'},{d:0,q:'13'},{d:0,q:'7#9'},{d:3,q:'9'},{d:3,q:'13'},{d:0,q:'9'},{d:0,q:'13'},{d:1,q:'m7'},{d:4,q:'7#9'},{d:0,q:'13'},{d:4,q:'7#9'}],bars:12,durations:[1,1,1,1,1,1,1,1,1,1,1,1],note:'Conserva las funciones del blues, pero utiliza 9ª, 13ª y 7(#9) para aumentar el color. El ii–V de los compases 9–10 aporta una preparación más marcada.',tags:['9ª','13ª','7(#9)','ii–V','color dominante'],knowledge:['dominant-color','ii-v','turnaround']}
 ],
 'Jazz':[
  {type:'safe',name:'La segura',family:'ii–V–I',degrees:[1,4,0,0],note:'Uno de los movimientos fundamentales de la armonía tonal y del jazz.',tags:['clásica']},
  {type:'variant',name:'La diferente',family:'Ciclo de quintas',degrees:[2,5,1,4],note:'Cadena de dominantes y preparación progresiva.',tags:['fluida']},
  {type:'creative',name:'La creativa',family:'Jazz modal',degrees:[0,5,1,4],note:'Alterna reposo y movimiento antes de volver a la tónica.',tags:['sofisticada']},
  {type:'sophisticated',name:'La sofisticada',family:'Jazz con sustitución',spec:[{d:1,q:'m7'},{d:4,q:'7'},{d:0,alter:-1,q:'maj7'},{d:4,q:'7'}],note:'Un ♭Imaj7 crea una desviación cromática de gran contraste.',tags:['cromática','avanzada']}
 ],
 'Funk / soul':[
  {type:'safe',name:'La segura',family:'Soul esencial',degrees:[0,5,3,4],note:'Cíclica y vocal, muy adecuada para grooves repetitivos.',tags:['groove']},
  {type:'variant',name:'La diferente',family:'Soul mayor',degrees:[0,3,5,4],note:'Más abierta y luminosa.',tags:['luminosa']},
  {type:'creative',name:'La creativa',family:'Funk armónico',degrees:[0,2,5,4],note:'Más tensión antes de regresar.',tags:['tensión']},
  {type:'sophisticated',name:'La sofisticada',family:'Neo-soul colorista',spec:[{d:0,q:'maj7'},{d:5,q:'m7'},{d:3,alter:-1,q:'maj7'},{d:4,q:'7'}],note:'Color ♭VImaj7 con sonoridad soul contemporánea.',tags:['neo-soul','modal']}
 ],
 'Electrónica':[
  {type:'safe',name:'La segura',family:'Loop electrónico',degrees:[0,5,3,4],note:'Cíclica y fácil de convertir en un loop.',tags:['repetitiva']},
  {type:'variant',name:'La diferente',family:'Electro emocional',degrees:[5,3,0,4],note:'Empieza en menor para generar contraste.',tags:['emocional']},
  {type:'creative',name:'La creativa',family:'Secuencia ascendente',degrees:[0,2,5,3],note:'Movimiento interno marcado.',tags:['cinética']},
  {type:'sophisticated',name:'La sofisticada',family:'Electro modal',spec:[{d:0},{d:5},{d:3,alter:-1,q:'maj7'},{d:2}],note:'El ♭VI introduce un color oscuro y moderno.',tags:['modal','oscura']}
 ],
 'Balada':[
  {type:'safe',name:'La segura',family:'Balada emocional',degrees:[0,5,3,4],note:'Equilibrio entre reposo y nostalgia.',tags:['emocional']},
  {type:'variant',name:'La diferente',family:'Balada clásica',degrees:[0,3,5,4],note:'Más luminosa y abierta.',tags:['melódica']},
  {type:'creative',name:'La creativa',family:'Balada con ii',degrees:[0,1,5,4],note:'El ii prepara suavemente el movimiento.',tags:['elegante']},
  {type:'sophisticated',name:'La sofisticada',family:'Balada cinematográfica',spec:[{d:0,q:'maj7'},{d:3,alter:-1,q:'maj7'},{d:5,q:'m7'},{d:4,q:'7'}],note:'Color prestado y séptimas para una atmósfera más cinematográfica.',tags:['cinematográfica']}
 ],
 'Folk':[
  {type:'safe',name:'La segura',family:'Folk esencial',degrees:[0,3,0,4],note:'Sencilla y cantable.',tags:['tradicional']},
  {type:'variant',name:'La diferente',family:'Folk cíclico',degrees:[0,5,3,4],note:'Añade un giro melancólico.',tags:['cíclica']},
  {type:'creative',name:'La creativa',family:'Folk modal',degrees:[0,6,5,4],note:'Movimiento descendente muy reconocible en música popular.',tags:['modal']},
  {type:'sophisticated',name:'La sofisticada',family:'Folk modal',spec:[{d:0},{d:6,q:'m'},{d:3,alter:-1,q:'maj7'},{d:4}],note:'Un ♭VI mayor cambia el paisaje sin abandonar la sencillez.',tags:['modal']}
 ],
 'Flamenco / rumba':[
  {type:'safe',name:'La segura',family:'Rumba popular',degrees:[0,6,5,4],note:'Descenso característico del lenguaje de la rumba y el flamenco.',tags:['tradicional']},
  {type:'variant',name:'La diferente',family:'Andaluz',degrees:[0,6,5,3],note:'Varía la resolución del descenso.',tags:['andaluza']},
  {type:'creative',name:'La creativa',family:'Rumba abierta',degrees:[0,5,3,4],note:'Más cercana al pop, manteniendo el carácter cíclico.',tags:['híbrida']},
  {type:'sophisticated',name:'La sofisticada',family:'Flamenco modal',spec:[{d:0},{d:6,q:'m'},{d:5,q:'maj'},{d:4,q:'7'}],note:'Contraste entre menor, mayor y dominante en el descenso.',tags:['modal','tensión']}
 ],
 'Ambient':[
  {type:'safe',name:'La segura',family:'Ambient abierto',degrees:[0,3,5,1],note:'Espaciosa y poco conclusiva.',tags:['espacial']},
  {type:'variant',name:'La diferente',family:'Ambient flotante',degrees:[0,5,3,1],note:'Más melancólica y suspendida.',tags:['flotante']},
  {type:'creative',name:'La creativa',family:'Ambient modal',degrees:[0,2,5,1],note:'Evita una cadencia demasiado evidente.',tags:['modal']},
  {type:'sophisticated',name:'La sofisticada',family:'Ambient cinematográfico',spec:[{d:0,q:'maj7'},{d:2,q:'m7'},{d:5,alter:-1,q:'maj7'},{d:4,q:'7'}],note:'Cambio de color amplio y poco predecible.',tags:['cinematográfica']}
 ]
};

// Metadatos de duración: si una familia no declara una duración específica,
// cada acorde ocupa un compás. Las familias pueden declarar bars/durations
// para conservar formas musicales reales (p. ej. blues de 12 compases).
Object.values(window.CHORDLAB_HARMONY_DB).forEach(families=>families.forEach(entry=>{
  entry.bars = entry.bars || (entry.degrees ? entry.degrees.length : (entry.spec ? entry.spec.length : 4));
  if(!entry.durations) entry.durations = Array.from({length: entry.degrees?.length || entry.spec?.length || 4},()=>1);
}));
