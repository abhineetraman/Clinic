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
                            <button class="btn btn-secondary"><a href="#section-1"> Overview </a></button>
                            <button class="btn btn-secondary"><a href="#section-2">Symptoms</a></button>
                            <button class="btn btn-primary"><a href="#section-3">Jump to section 3</a></button>
                            <button class="btn btn-warning"><a href="#section-4">Jump to section 4</a></button>
                            <h2 id="section-1">Overview</h2>
                            <p>
                            Most teenagers will have pimples at some point. Some only have a few small spots that soon go away again. Others develop persistent and visible acne. It can be very distressing, particularly in puberty.
                            <br>
                            <br>
                            But several things can be done about acne, although patience is needed. This information concerns acne in teenagers and young adults, known as “common” acne or acne vulgaris.
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
                            <h2 id="section-3">Section 3</h2>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <h2 id="section-4">Section 4</h2>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <p>Go to the
                            <a href="#section-1">top</a>.
                            </p>
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