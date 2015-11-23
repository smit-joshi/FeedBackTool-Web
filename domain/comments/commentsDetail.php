<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>History</title>

    <style type="text/css">
        .bs-example{
            margin: 20px;
        }
    </style>
</head>

<body id="page-top" class="index" >

<!-- Navigation -->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#page-top">Feedback Tool</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li class="hidden">
                    <a href="#page-top"></a>
                </li>
                <li class="page-scroll">
                    <a href="#/home">Home</a>
                </li>
                <li class="page-scroll">
                    <a href="#/comments">History</a>
                </li>
                <li class="page-scroll">
                    <a href="javascript:;" ng-click="logout()">Logout</a>
                </li>

            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>
<!-- Header -->
<!-- Contact Section -->
<section id="contact" style="height: 100%">
    <div class="container">
        <br>
        <h4 style="text-align: center">History Detail</h4>
        <div class="bs-example">
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <p>Comment {{commentsData.commentId}}</p>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p><img src="http://localhost:8080/Feedback/uploads/{{commentsData.filepath}}" height="100px;" width="100px;" alt="No Image"></p>
                            <p>{{commentsData.commentsDetail}}</p>
                            <p>{{commentsData.commentDate}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<!-- Footer -->
<footer class="text-center">
    <div class="footer-below">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    created by <A HREF="" target="_blank"> Green Apex</A>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-top page-scroll visible-xs visible-sm">
    <a class="btn btn-primary" href="#page-top">
        <i class="fa fa-chevron-up"></i>
    </a>
</div>
</body>
</html>
