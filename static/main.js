const Home = Vue.component("homepage", {
    template:`
        <div>
            <div class="design">
                <div class="container mt-3">
                    <a href="tel:+919999999999"> <img id="icon" src="https://icon-library.com/images/telefone-icon/telefone-icon-12.jpg"> +91 9999999999</a>  <a href="https://maps.app.goo.gl/3yNqSCWZss8So4kt6"> <img id="icon" src="https://cdn-icons-png.flaticon.com/128/684/684908.png"> Lucknow, India</a>
                    <br>
                    <br>

                    <ul class="nav nav-pills" id="nav">
                        <li class="nav-item" id="first">
                            <img id="nav-img" src="https://icon2.cleanpng.com/20171221/qiq/medical-logo-5a3b9478a099c5.9467384915138540726578.jpg" />
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About Us</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Skin</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/acne-treatment" class="nav-link">Acne Treatment</router-link></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Anti-Aging</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/acne-treatment" class="nav-link">Acne Treatment</router-link></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Procedure</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/acne-treatment" class="nav-link">Acne Treatment</router-link></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <router-link to="/acne-treatment" class="nav-link">Blog</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/acne-treatment" class="nav-link">Gallery</router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Academy(Courses)</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/acne-treatment" class="nav-link">Acne Treatment</router-link></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link to="/acne-treatment" class="nav-link">Contact Us</router-link>
                        </li>
                        <li class="nav-item">
                            <button class="appointment"><router-link to="/acne-treatment" class="nav-link" id="booking">Book Appointment</router-link></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
})

const Acne_Treatment = Vue.component("Acne-treatment", {
    template:`
        <div>
            <div class="design">
                <div class="container mt-3">
                    <a href="tel:+919999999999"> <img id="icon" src="https://icon-library.com/images/telefone-icon/telefone-icon-12.jpg"> +91 9999999999</a>  <a href="https://maps.app.goo.gl/3yNqSCWZss8So4kt6"> <img id="icon" src="https://cdn-icons-png.flaticon.com/128/684/684908.png"> Lucknow, India</a>
                    <br>
                    <br>

                    <ul class="nav nav-pills" id="nav">
                        <li class="nav-item" id="first">
                            <img id="nav-img" src="https://icon2.cleanpng.com/20171221/qiq/medical-logo-5a3b9478a099c5.9467384915138540726578.jpg" />
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About Us</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" data-bs-toggle="dropdown" href="#">Skin</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/acne-treatment" class="nav-link active">Acne Treatment</router-link></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Anti-Aging</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/acne-treatment" class="nav-link">Acne Treatment</router-link></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Procedure</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/acne-treatment" class="nav-link">Acne Treatment</router-link></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <router-link to="/acne-treatment" class="nav-link">Gallery</router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Academy(Courses)</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/acne-treatment" class="nav-link">Acne Treatment</router-link></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link to="/acne-treatment" class="nav-link">Contact Us</router-link>
                        </li>
                        <li class="nav-item">
                            <button class="appointment"><router-link to="/acne-treatment" class="nav-link" id="booking">Book Appointment</router-link></button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="heading">
                <h2> Acne Treatment </h2>
            </div>
            <br>
            <br>
            <div id="content">
                <div class="container-mt-3">
                    <div class="row">
                        <div class="col-sm-1">
                        </div>
                        <div class="col-sm-8">
                            <h1> Acne Treatment in Lucknow </h1 >
                            <button class="btn btn-dark"><a href="#section-1"> Overview </a></button>
                            <button class="btn btn-secondary"><a href="#section-2">Symptoms</a></button>
                            <button class="btn btn-primary"><a href="#section-3">Cause</a></button>
                            <button class="btn btn-warning"><a href="#section-4">Treatments</a></button>
                            <button class="btn btn-danger"><a href="#section-5">Prevention</a></button>

                            <h2 id="section-1">Overview</h2>
                            <p>
                            Most teenagers will have pimples at some point. Some only have a few small spots that soon go away again. Others develop persistent and visible acne. It can be very distressing, particularly in puberty.
                            <br>
                            <br>
                            But several things can be done about acne, although patience is needed. This information concerns acne in teenagers and young adults, known as “common” acne or acne vulgaris.
                            <br>
                            <img id="overview-img" src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2374757.jpg" />
                            
                            <br><br>
                            Best Acne Treatment Provided by Dr. Asma Dermatologist of The Velvet Skin Centre Lucknow
                            Acne is a skin condition when your hairs become clogged with oil and dead skin cells. It generates whiteheads, blackheads or pimples. Acne is most familiar among teenagers, though it concerns people of all ages.
                            <br><br>
                            Effective acne cures are available, but acne can be ongoing. The pimples and bumps recover slowly; when one begins to disappear, others seem to crop up.
                            <br><br>
                            Depending on its harshness, acne can cause emotional despair and scar the skin. The before you start treatment, the inferior your risk of such problems.
                            <br><br>

                            <h4>What is Acne</h4>
                            <b>Acne is a chronic, inflammatory skin condition that provokes spots and pimples, particularly on the face, shoulders, back, chest, neck, and upper arms.
                            </b><br><br>
                            Whiteheads, blackheads, pimples, cysts, and nodules are all types of acne.
                            <br><br>
                            It is the most common skin condition in India, affecting up to 40 million Indians yearly.
                            <br><br>
                            It commonly happens during puberty, when the sebaceous glands start, though it can happen at any age. Acne is not dangerous, but it can leave skin scars.
                            <br><br>
                            The sebaceous glands produce oil. Acne is produced by men hormones produced by the adrenal glands in both gentlemen and ladies.
                            <br><br>
                            At least 90 per cent of people in India experience acne between 12 and 24 years.
                            <br><br>

                            <h4>Different Types of Acne?</h4>
                            If you have acne, you might notice a mix of pimple types.
                            <br><br>
                            Whiteheads and blackheads, referred to as comedones, are the most common acne lesions.
                            <br><br>
                            Blackheads, or open comedones, open at the texture of your skin. Oxygen in the air (not dirt) shows the top of these spots their darker appearance.
                            <br><br>
                            Whiteheads, or closed comedones, form as raised bumps under the surface of your skin. They remain flesh-coloured.
                            <br><br>
                            Inflammatory lesions, which are more likely to cause scarring of your skin, include:
                            <br><br>
                            <b>Papules:</b> These small, red, raised, inflamed or infected hair follicles cause bumps.
                            <br><br>
                            <b>Pustules: </b> These small red pimples have pus at their tips.
                            <br><br>
                            <b>Nodules: </b> These solid, often unhappy lumps develop under the shell of your skin.
                            <br><br>
                            <b>Cysts: </b> These large lumps beneath your skin contain pus and are usually painful.
                            </p>
                            <h2 id="section-2">Symptoms of Acne</h2>
                            <p>
                            Acne symptoms vary depending on the harshness of your situation:
                            <br><br>
                            <ul>

                                <li>Whiteheads (closed plugged pores) </li>
                                <li>Blackheads (open plugged pores) </li>
                                <li>Small red, tender bumps (papules) </li>
                                <li>Pimples (pustules), which are papules with pus at their tips </li>
                                <li>Large, solid, painful lumps under the skin (nodules) </li>
                                <li>Painful, pus-filled lumps under the skin (cystic lesions) </li>
                            </ul>

                            Acne usually occurs on the face, forehead, chest, upper back and shoulders.
                            
                            </p>
                            <h2 id="section-3">Causes of Acne</h2>

                                <p>Both male and female skin has pores that associate with oil glands underneath the skin. Follicles commune the glands to the pores. Follicles are tiny sacs that construct and perspire liquid.</p>
                                <p>The glands produce an oily liquidTrusted Source called sebum. Sebum maintains dead skin cells via the follicles to the skin's surface. A small hair grows via the follicle out of the skin.</p>
                                <p>Pimples grow when these follicles get blocked, and oil builds up under the skin.</p>
                                <p>Skin cells, sebum, and hair can clump into a cork. This cork gets contaminated with bacteria, and swelling results. Acne starts to develop when the plug begins to break down.</p>
                                <p>Propionibacterium acnes (P. acnes) is the name which is responsible for the bacteria that live on the skin and donate to the infection of pimples.</p>
                                <p>Research suggestsTrusted Source that the harshness and commonness of acne rely on the strain of bacteria. Not all acne bacteria are responsible for acne. One strain enables to maintain the skin acne-free.</p>
                                <h4>
                                    Hormonal factors
                                </h4>
                                <p>A range of factors triggers acne, but the main cause is increased androgen levels.</p>
                                <p>Androgen is a type of hormone, the levels of which rise when adolescence begins. In women, it gets converted into estrogen.</p>
                                <p> growth of androgen levels causes the oil glands that are beneath the skin to produce. The enlarged gland creates more sebum. Excessive sebum can crack down cellular walls in the pores, causing bacteria to grow.</p>
                                <h4>
                                    Other possible triggers
                                </h4>
                                <p>Some studies suggestTrusted Source that genetic factors may increase the risk.</p>
                                <h4>
                                    Other causes include:
                                </h4>
                        
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li>
                                                some medications that contain androgen and lithium
                                            </li>
                                            <li>
                                                greasy cosmetics
                                            </li>
                                            <li>
                                                hormonal changes
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li>
                                                emotional stress
                                            </li>
                                            <li>
                                                menstruation
                                            </li>
                        
                                        </ul>
                                    </div>
                                </div>
                        
                                
                            <br>

                            <h2 id="section-4">Available Acne Treatment</h2>
                                <p>The acne treatment plan that's right for you depends on many considerations, including </p>
                                <li>What type of acne (i.e., blackheads, pimples, etc.) do you have</li>
                                <li>Where the acne appears on your skin</li>
                                <li>What treatments you’ve already tried</li>
                                <li>When the breakouts started</li>
                                <li>Your age</li>
                                <li>Whether the acne has left you with dark spots or scars</li>
                        
                                <p>While a therapy plan can differ from one patient to the next, treatment often follows these guidelines for two patients with the same kind of acne.</p>
                                <p>Whiteheads, blackheads, or both: If you keep these breakouts, you'll probably use acne medication for your skin. Your therapy plan may include one of the following:</p>
                                <li>A retinoid</li>
                                <li>A retinoid + benzoyl peroxide, azelaic acid, or salicylic acid</li>
                                <li>Benzoyl peroxide + an antibiotic you apply to your skin</li>
                                <p>Pimples: Mild or moderate pimples cure with the medicine you apply to your skin. The cure will often consist of utilizing one of the following:</p>
                                <li>Benzoyl peroxide</li>
                                <li>A Retinoid</li>
                                <li>Azelaic acid</li>
                                <li>Benzoyl peroxide + a retinoid or an antibiotic you apply to your skin</li>
                        
                                <p>Women who persist in getting breakouts may require medication, such as a birth management tablet which is approved by the U.S.(FDA) and has agreed to cure pimples or scars. The birth management patch may even be useful, as can some other drugs.</p>
                                <p> You'll find more information about stubborn acne that women can develop: Stubborn acne? Hormonal therapy may help</p>
                                <p>Acne nodules and cysts: If you have deep, painful acne that usually leaves a permanent scar, an effective cure can help you see clearer skin and stop new scars.</p>
                                <p>Treatment may consist of:</p>
                        
                                <li>Prescription medication that you apply to your skin + taking an antibiotic</li>
                                <li>Hormonal therapy (women only)</li>
                                <li>Isotretinoin (medication approved to treat severe acne)</li>
                                <h5>
                                    Sometimes acne needs extra help
                                </h5>
                                To assist you in getting the best achievable results from treatment, your dermatologist may even recommend counting one of the followership to your treatment plan.<p></p>
                                <p>Laser or light therapy: Studies indicate that laser and light machines can assist in clearing acne. This kind of treatment performs best when mixed with different acne treatments.</p>
                                <p>A corticosteroid injection: A dermatologist can inject it with a corticosteroid if you have a large, extremely painful, deep acne breakout. It can rapidly reduce the pain and the size of the breakout. While effective, this treatment is dedicated to treating a few painful acne flights. Using it more than a few times can cause side effects.</p>
                                <p>A healthy diet: Some studies suggest that what you eat can also help to give you clearer skin. If you think what you're eating could be causing breakouts, find out what the research shows.</p>
                            <br>

                            <h2 id="section-5">Prevention: Can acne be prevented? </h2>
                                <p>
                                    Preventing acne is difficult, if not impossible, during normal hormonal changes. But some things can help:
                                </p>
                        
                                <li>Wash your face daily with warm water and a mild facial cleanser.</li>
                                <li>Routinely use moisturizer.</li>
                                <li>You don't have to stop using makeup, but try to use "non-comedogenic" products and remove makeup at the end of each day.</li>
                                <li>Keep your hands away from your face.</li>
                            
                            </div>
                        <div class="col-sm-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

const About = Vue.component("About-Us", {
    template : `
    
    `
})


const routes = [{
    path: '/',
    component: Home
},{
    path: '/acne-treatment',
    component: Acne_Treatment
}, {
    path: '/about',
    component: About
}];

const router = new VueRouter({
    routes
})

var app = new Vue({
    el: '#app',
    router: router,
})