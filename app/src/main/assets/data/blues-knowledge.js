/*
 ChordLab · Blues Knowledge Pack v1
 Base documental: materiales aportados por el usuario.
 Este archivo convierte conceptos observados en las fuentes en metadatos
 educativos y reglas de generación; no reproduce páginas ni ejercicios.
*/
window.CHORDLAB_BLUES_KNOWLEDGE={
  version:'1.0',
  style:'Blues',
  fundamentals:{
    form:'12 compases',
    coreDegrees:['I','IV','V'],
    dominantVocabulary:['7'],
    commonColors:['9','13','7(#9)'],
    feels:['Shuffle','12/8','Boogie-Woogie','Swing','Country Shuffle','Slow Rock','Funk'],
    concepts:[
      {id:'i-iv-v',title:'I · IV · V',text:'El núcleo del blues de doce compases se organiza alrededor de los grados I, IV y V.'},
      {id:'quick-change',title:'Quick change',text:'Una variante habitual lleva el IV al segundo compás para aumentar el movimiento desde el comienzo.'},
      {id:'turnaround',title:'Turnaround',text:'El final puede utilizar V —o un movimiento V–IV–I/V— para preparar la repetición del ciclo.'},
      {id:'ii-v',title:'ii–V',text:'Una variante documentada coloca un ii menor antes del V en los compases 9–10.'},
      {id:'dominant-color',title:'Color dominante',text:'Las fuentes trabajan con acordes dominantes 7 y amplían el color con 9, 13 y 7(#9).'}
    ]
  },
  families:{
    safe:{label:'Segura',purpose:'Reconocer la forma básica del blues',concepts:['i-iv-v']},
    variant:{label:'Diferente',purpose:'Introducir movimiento sin abandonar la forma',concepts:['i-iv-v','quick-change','turnaround']},
    creative:{label:'Creativa',purpose:'Añadir dirección armónica y preparación',concepts:['quick-change','ii-v','turnaround']},
    sophisticated:{label:'Sofisticada',purpose:'Explorar color armónico manteniendo la función',concepts:['dominant-color','ii-v','turnaround']}
  },
  sources:[
    {title:'Blues Guitar with Steve Krenz',file:'Blues Guitar Lesson Book.pdf',use:'Forma de 12 compases, I-IV-V, variaciones, ii-V, acordes 7/9/13/7(#9), feels y recursos didácticos.'},
    {title:'Blues a tu alcance',file:'Blues a tu alcance.pdf',use:'Estructura progresiva de escalas, acordes, progresiones, quick change, blue notes y distintos enfoques de blues.'},
    {title:'Blues Guitar Basics — Keith Wyatt',file:'Keith Wyatt - Blues Guitar Basics.pdf',use:'12-bar blues, turnaround, shuffle, ritmo y fundamentos de acompañamiento.'},
    {title:'Essential Blues Guitar — Dave Celentano',file:'Dave Celentano - Essential Blues Guitar.pdf',use:'12-bar blues, variaciones, turnarounds, cambios de acordes y recursos de acompañamiento.'},
    {title:'Classic Blues Licks',file:'Classic Blues Licks.pdf',use:'Relación entre blues box, licks, turnarounds y frases basadas en acordes.'},
    {title:'Blues For Guitar — Robben Ford',file:'Blues For Guitar - Robben Ford.pdf',use:'Líneas, análisis, desarrollo de motivos y lenguaje sobre dominantes del blues.'},
    {title:'The Real Book Of Blues',file:'The Real Book Of Blues.pdf',use:'Ejemplos de lenguaje armónico real con dominantes, menores y extensiones.'},
    {title:'101 Licks Para Guitarra — Sebastián Salinas',file:'101 Licks para Guitarra - Sebastián Salinas.pdf',use:'Vocabulario de interpretación y estilos de numerosos guitarristas; se utiliza como referencia melódica, no como catálogo de copias literales.'}
  ]
};
