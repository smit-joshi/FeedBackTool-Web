<!DOCTYPE html>
<html lang="en">
<head>
    <title>History</title>
</head>

<body id="page-top" class="index">

<!-- Navigation -->
<feedback-header></feedback-header>
<!-- Header -->
<!-- Contact Section -->
<section id="contact" style="height: 100%">
    <div class="container">
        <br>
        <h4 style="text-align: center">History List</h4>

        <div class="bs-example">
            <div class="panel-group" id="accordion" ng-repeat="comments in dataComments | orderBy:'-commentDate'">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion"
                               href="#/commentsDetail?commentId={{comments.commentId}}">Commented On
                                {{comments.commentDate}}</a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p><img src="http://local-pc:8083/FeedbackTool/{{comments.filepath}}"
                                    height="100px;"
                                    width="100px;" alt="No Image"></p>

                            <p>{{comments.commentsDetail}}</p>

                            <p>{{comments.commentDate}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<feedback-footer></feedback-footer>
</html>
