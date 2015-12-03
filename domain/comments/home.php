<!DOCTYPE html>
<html lang="en">

<head>
    <title>Home</title>
</head>

<body id="page-top" class="index">

<feedback-header></feedback-header>

<!-- Header -->


<!-- Contact Section -->
<section id="contact">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                <form method="post" enctype="multipart/form-data" name="sentMessage" id="sentMessage" novalidate>
                    <br><br>

                    <div class="row control-group">
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                            <label>Comment Here</label>
                            <textarea rows="5" class="form-control" ng-model="commentsData" placeholder="Message"
                                      id="commentsData" name="commentsData" required></textarea>

                            <p class="help-block text-danger"></p>
                        </div>

                    </div>
                    <br>
                    <br>
                    <br>
                    <button type="file" ngf-select="uploadFiles($file, $invalidFiles)" id="submitClick"
                            accept="image/*" ngf-max-height="1000" ngf-max-size="1MB" class="btn btn-primary">
                        Select File
                    </button>

                    <button type="reset" class="btn btn-default">Reset</button>
                    <br><br>
                    File:
                    <div style="font:smaller">{{f.name}} {{errFile.name}} {{errFile.$error}} {{errFile.$errorParam}}
      <span class="progress" ng-show="f.progress >= 0">
          <div style="width:{{f.progress}}%"
               ng-bind="f.progress + '%'"></div>
      </span>
                    </div>
                    {{errorMsg}}
                </form>
                <br>

                <div id="success"></div>
                <!--<div class="row">
                    <div class="form-group col-xs-12 ">
                        <button type="submit" class="btn btn-success btn-md col-xs-2 ">Send</button>
                    </div>
                </div>-->
                </form>
            </div>
        </div>
    </div>
</section>

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
</body>
</html>
