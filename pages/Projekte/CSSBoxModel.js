import  styles  from "../styles/boxmodel.module.scss"
import  Head from 'next/head'


function boxmodel () {
    return <div>
                <Head>
                    <title>CSS Box Model</title>
                </Head>
                    <div className={styles.wrapper}>
                      <div className={styles.slide1}>
                            <h1 className={styles.BoxUeberschrift}>CSS Box Model</h1>
                            <ul>
                                <li><p>legt CSS Spezifikationen fest</p></li>
                                <li><p>Göße HTML-Element basierend auf CSS-Angaben</p></li>
                                <li><p>Block-Elemente (4 Angaben spielen bei Berechnung eine Rolle)</p></li>
                            </ul>
                            <p><span className={styles.box1}>Inhalt (mit width & height)</span></p>
                            <p><span className={styles.box2}>Innenabstand (padding)</span></p>
                            <p><span className={styles.box3}>Rahmen (border)</span></p>
                            <p><span className={styles.box4}>Außenabstand (margin)</span></p>
                        </div>

                        <div className={styles.slide2}>
                            <h2 className={styles.BoxUnterueberschriften}>Inhalt mit width & heigth</h2>
                            <ul>
                                <li><p>Block-Element - gesamte Breite (zur Verfügung)</p></li>
                                <li><p>mit width & height explizite Größenangaben möglich</p></li>
                                <li className={styles.linone}><p>- Box wird in angegebene Richtung begrenzt</p></li>
                                <li className={styles.linone}><p>- benötigt Inhalt mehr Platz = Box wächst in andere Richtung</p></li>
                            </ul>
                            <p><span  className={styles.box5}>ohne width</span></p>
                            <p><span  className={styles.box6}>mit width</span></p>
                            <p><span  className={styles.box7}>ohne height</span></p>
                            <p><span  className={styles.box8}>mit height</span></p>
                            <p><span  className={styles.box9}>mit width & height, zu viel Inhalt (Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.)</span></p>
                        </div>

                        <div className={styles.slide3}>
                            <h2 className={styles.BoxUnterueberschriften}>Innenabstand</h2>
                            <ul>
                                <li><p>Innenabstand - für jede Seite individuell festlegbar</p></li>
                                <li><p>padding-top; padding-bottom; padding-left; padding-right</p></li>
                            </ul>
                            <p><span  className={styles.box10}>padding:10px - Innenabstand auf allen Seiten</span></p>
                            <p><span  className={styles.box11}>padding:10px 20px - oben & unten 10px; rechts & links 20px</span></p>
                            <p><span  className={styles.box12}>padding:10px 20px 30px - oben 10px; links & rechts 20px; unten 30px</span></p>
                            <p><span  className={styles.box13}>padding:10px 20px 30px 40px - oben 10px; rechts 20px; unten 30px; links 40px (Uhrzeigersinn)</span></p>
                            <ul>
                                <li><p>Innenabstände zur Größenangabe hinzuaddiert</p></li>
                                <li className={styles.linone}><p>- width:300px & padding:10px = 320px breit</p></li>
                            </ul>
                        </div>

                        <div className={styles.slide4}>
                            <h2 className={styles.BoxUnterueberschriften}>Rahmen</h2>
                            <ul>
                                <li><p>wird ebenfalls zur Größenangabe hinzuaddiert</p></li>
                                <li><p>mehrere CSS-Eigenschaften um Rahmenlinie zu definieren</p></li>
                            </ul>
                            <p><span className={styles.box14}>border-style: zB. none, <span className={styles.solid}>solid</span>, <span className={styles.double}>double</span>, <span className={styles.dashed}>dashed</span>, <span className={styles.dotted}>dotted</span></span></p>
                            <p><span className={styles.box15}>border-color: Farbe</span></p>
                            <p><span className={styles.box16}>border-width: dicke</span></p>
                            <p><span className={styles.box17}>border: 3px, solid, black (kombiniert)</span></p>
                            <ul>
                                <li><p><span className={styles.box18}>mit Zusätzen -top, -bottom, -left, -right - jede Seite separat</span></p></li>
                            </ul>
                        </div>

                        <div className={styles.slide5}>
                            <h2 className={styles.BoxUnterueberschriften}>Außenabstand</h2>
                            <ul>
                                <li><p>margin - Abstand Elemente nach Außen</p></li>
                                <li><p>margin-top; margin-bottom; margin-left; margin-right</p></li>
                            </ul>
                            <p><span className={styles.box19}>margin:10px - Außenabstand auf allen Seiten</span></p>
                            <p><span className={styles.box20}>margin:10px 20px - oben & unten 10px; rechts & links 20px</span></p>
                            <p><span className={styles.box21}>margin:10px 20px 30px - oben 10px; links & rechts 20px; unten 30px</span></p>
                            <p><span className={styles.box22}>margin:10px 20px 30px 40px - oben 10px; rechts 20px; unten 30px; links 40px (Uhrzeigersinn)</span></p>
                            <ul>
                                <li><p>Besonderheit: 2 Elemente mit vertikalen Außenabständen treffen aufeinander</p></li>
                                <li><p>2 Boxen nebeneinander - Außenabstände addieren sich</p></li>
                            </ul>
                            <p><span className={styles.box23}>Box1 - margin-right:10px</span><span className={styles.box24}>Box2 - margin-left:10px</span><span className={styles.box25}>margin insgesamt 20px</span></p>
                            <ul>
                                <li><p>anders, wenn Boxen übereinander stehen - kleinerer Wert entfällt</p></li>
                            </ul>
                            <p><span className={styles.box26}>Box1 - margin-bottom:10px</span></p>
                            <p><span className={styles.box27}>Box2 - margin-top:20px</span></p>
                            <p><span className={styles.box28}>margin insgesamt 20px</span></p>
                            <ul>
                                <li><p>CSS-Eigenschaften - sorgen dafür, dass vertikale Abstände nicht kolabieren</p></li>
                                <li className={styles.linone}><p>- absolut positionierte Elemente (position:absolute, overflow, float oder position:absolute oder display:inline-block)</p></li>
                            </ul>
                        </div>

                        <div className={styles.slide6}>
                            <h2 className={styles.BoxUnterueberschriften}>Box Model anpassen</h2>
                            <ul>
                                <li><p>Größe des Inhalts, Innenabstand, Rahmen, Außenabstand addieren (Größenverhältnisse)</p></li>    
                                <li><span>Viewport ohne Problem</span></li>
                            </ul>
                            <p><span className={styles.box29}>25% des Viewports</span><span className={styles.box30}>75% des Viewports</span></p>
                            <ul>
                                <li><p>Viewport mit Problemen</p></li>
                                <li><p>Nun 10px Rahmenlinie rechts einfügen</p></li>
                            </ul>
                            <p><span className={styles.box31}>25% des Viewports mit 10px Rahmenlinie</span><span className={styles.box32}>75% des Viewports</span></p>
                            <ul>
                                <li><p>border wird zu den 25% dazu addiert</p></li>
                                <li><p>die 75% haben nicht mehr genügend Platz und wandern nach unten</p></li>
                                <li className={styles.linone}><p>- deshalb wurde box-sizing:border-box eingeführt</p></li>
                                <li><p>Innenabstände & Rahmenlinien werden von 25% abgezogen</p></li>
                            </ul>
                            <p><span className={styles.box33}>25% des Viewports mit 10px Rahmenlinie abgezogen</span><span className={styles.box34}>75% des Viewports</span></p>
                        </div>

                        <div className={styles.slide7}>
                            <h2 className={styles.BoxUnterueberschriften}>Box Model von Inline-Elementen</h2>
                            <ul>
                                <li><p>Inline-Elemente hoch & breit wie Inhalt</p></li>
                                <li><p>width & heigt machen keinen Sinn</p></li>
                                <li><p>können trotzdem mit Innen- & Außenabständen versehen werden</p></li>
                                <li><p>margin - rechts & links normal; oben & unten keine Wirkung</p></li>
                                <li><p>vertikale Abstände mit line-height</p></li>
                                <li><p>oder Elemente mit display:inline-block umwandeln</p></li>
                            </ul>
                            <p><span className={styles.box35}>Inline-Element mit line-height</span></p>
                            <p><span className={styles.box36}>Inline-Element mit display:inline-block</span></p>
                        </div>

                        <div className={styles.slide8}>
                            <h2 className={styles.BoxUnterueberschriften}>Überfließende Inhalte steuern</h2>
                            <ul>
                                <li><p>Normalfall: Element wächst mit Inhalt mit</p></li>
                                <li><p>Verhalten mit CSS ändern zB. wenn width oder height definiert und mehr Inhalt als in Box passt</p></li>
                                <li><p>overflow legt fest, wie Browser damit umgeht</p></li>
                            </ul>
                            <p><span className={styles.box37}>overflow:visible (Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.)</span></p>
                            <p><span className={styles.box38}>overflow:hidden (Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.)</span></p>
                            <p><span className={styles.box39}>overflow:scroll (Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.)</span></p>
                            <p><span className={styles.box40}>overflow:auto (Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.)</span></p>
                            <p className={styles.pb100}><span className={styles.box41}>overflow:inherit (Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.)</span></p>
                        </div>
                    </div>

    </div>

}

export default boxmodel

/*$( document ).ready(function( ) {

$('#slide1').hide();

    $(window).scroll(function() {
        var scrolled_val = $(document).scrollTop().valueOf();
        if (scrolled_val >= 0) {
            $('#slide1').show('slide',{direction:'right'}, 2000);
        }
    });
});*/

