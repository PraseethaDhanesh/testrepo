        function dataSubmit() {
            var name = document.getElementById('name').value;
            var pwd = document.getElementById('pwd').value;
            
            console.log("name >>> ",name);
            console.log("pwd >>> ",pwd);
            
                let url = "http://localhost/test_API/testapi.php?StudentName="+name+"&Studentid=" + pwd;
                $.ajax({url: url, success: function(result){
                  console.log("success",result)
                    if(result == false) {
                        alert("error");
                    } else {
                        window.location = "http://localhost/sunil/HTML/PR_1/"
                    }
                },
                error: function(error) {
                  console.log("error");
                    
                } 
            });
        }