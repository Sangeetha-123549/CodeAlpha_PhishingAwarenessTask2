document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    if(form){

        form.addEventListener("submit", function(event){

            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.querySelector('input[name="q3"]:checked');

            if(!q1 || !q2 || !q3){

                event.preventDefault();

                alert("⚠️ Please answer all questions before submitting.");

                return;
            }

        });

    }

});