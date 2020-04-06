<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Appland Bootstrap Template - Index</title>
    <meta content="" name="descriptison">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">


    <!-- Template Radio -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="assets/css/radio.css">

    <link rel='stylesheet' href='https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css'>
    <link rel="stylesheet" href="assets/css/slider.css">
</head>

<body>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
        <div class="container d-flex">

            <div class="logo mr-auto">
                <h1 class="text-light"><a href="index.html">Covid19 Screening</a></h1>
            </div>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li class="get-started"><a href="index1.php">Regular Diagnosis</a></li>
                </ul>
            </nav>

        </div>
    </header>
    <!-- End Header -->
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class=" container-fluid">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="card">
                        <div class="card-img-top top-img-div" id="top-img-div">
                            <img class="top-img" id="img-info" src="./assets/img/health.png" alt="health">
                        </div>
                        <div class="card-body">
                            <h3 id="ques" class="card-title">Help us know you.</h3>
                            <!-- <h5 class="card-title">Card title</h5> -->
                            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p> -->
                        </div>
                        <ul class="list-group list-group-flush" id="first-item">
                            <li class="list-group-item">
                                <div>
                                    Gender:
                                </div>
                                <div style=" margin-top: 25px;">
                                    <label for="male" class="gicons">
                                        <input class="gen" type="radio" name="gender" id="male" value="male" />
                                        <span class="radspan">
                                            <img src="./assets/img/man.svg" id="img-male" onclick="changem()"
                                                alt="male"></span>
                                    </label>
                                    <label for="female" class="gicons" style="margin-left: 30px;">
                                        <input class="gen" type="radio" name="gender" id="female" value="male" />
                                        <span class="radspan"><img src="./assets/img/user.svg" onclick="changef()"
                                                id="img-female" id="img-female" alt="female"></span>
                                    </label>

                                </div>
                            </li>
                            <li class="list-group-item">Age:
                                <div class="d-flex justify-content-center my-4">
                                    <div class="w-75">
                                        <input type="range" class="custom-range" id="age" min="0" max="100">
                                    </div>
                                    <span class="font-weight-bold text-primary ml-2 valueSpan2"></span>
                                </div>
                            </li>

                        </ul>



                        <div class="card-body">
                            <button class="btn btn-primary" id="next1" type="button" onclick="starter()">
                                Next
                            </button>

                            <button class="btn btn-primary" id="load" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="container">
            <div class="row">
                <div
                    class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-1 order-lg-1">
                    <div>
                        <h1>Help us know you</h1>
                        <h2>Please answer the following question. Select your gender and age.</h2>
                        <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>

                    </div>
                </div>
                <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-2 order-lg-2 hero-img card text-white mb-3"
                    style="background-color: #cddffa;margin-top: 10px;">

                    <div class="card-body" style="text-align: center;">
                        <input type="radio" name="gender" id="card">
                        <label class="labelGender" for="card">
                            <i class="fa fa-male" aria-hidden="true"></i>
                            <span>Male</span>
                        </label>
                        <input type="radio" name="gender" id="cash">
                        <label class="labelGender" for="cash" style="margin-left: 20px;">
                            <i class="fa fa-female" aria-hidden="true"></i>
                            <span>Female</span>
                        </label>
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <input type="text" class="inputAge form-control" placeholder="Age"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" id="priceRange">
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2">Years</span>
                            </div>
                        </div>
                        <div class="slider-box">
                            <div id="price-range" class="slider"></div>
                        </div>

                    </div>
                    <!-- <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img"
                        data-aos="fade-up">
                        <img src="assets/img/hero-img.png" class="img-fluid" alt="">
                    </div> -->
        </div>
        </div>

    </section><!-- End Hero -->
    -->



    <!-- Vendor JS Files -->
    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>
    <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
    <script src="assets/vendor/venobox/venobox.min.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/slider.js"></script>
    <script src="assets/js/loader.js"></script>
    <script src="assets/js/api.js"></script>
    <script src="assets/js/nextHandler.js"></script>
</body>

</html>