<?php
require_once('./inc/head.php') ?>

<main>
    <section class="dashboard">
        <div class="menu">
            <img src="./assets/img/logo_camino.jpg" alt="Logo Camino">
            <a href="dashboard.php"><h2>Dashboard</h2></a>
            <a href="index.php"><h2>Accueil</h2></a>
        </div>
        <div class="management">
            <div class="title_management">
                <h1>Panneau de contrôle</h1>
            </div>
            <div class="items_management">
                <div class="item">
                    <div class="title_item">
                        <h3>Item 1</h3>
                        <p class="sub_title">Boîte de gestion</p>
                    </div>
                    <form method="post" action="">
                        <div class="form_element">
                            <label for="element_name" class="sub_title">Titre de l'élément 1</label>
                            <input type="text" name="item1_name" id="element_name" class="text_element">
                        </div>
                        <div class="form_element">
                            <label for="element_view" class="item_label">Afficher l'élément 1</label>
                            <input type="checkbox" name="item1_check" id="element_view" class="cta_toggle">
                        </div>
                    </form>
                </div>
                <div class="item">
                    <div class="title_item">
                        <h3>Item 2</h3>
                        <p class="sub_title">Boîte de gestion</p>
                    </div>
                    <form method="post" action="">
                        <div class="form_element">
                            <label for="element_name" class="sub_title">Titre de l'élément 2</label>
                            <input type="text" name="item2_name" id="element_name" class="text_element">
                        </div>
                        <div class="form_element">
                            <label for="element_view" class="item_label">Afficher l'élément 2</label>
                            <input type="checkbox" name="item2_check" id="element_view" class="cta_toggle">
                        </div>
                    </form>
                </div>
                <div class="item">
                    <div class="title_item">
                        <h3>Item 3</h3>
                        <p class="sub_title">Boîte de gestion</p>
                    </div>
                    <form method="post" action="">
                        <div class="form_element">
                            <label for="element_name" class="sub_title">Titre de l'élément 3</label>
                            <input type="text" name="item3_name" id="element_name" class="text_element">
                        </div>
                        <div class="form_element">
                            <label for="element_view" class="item_label">Afficher l'élément 3</label>
                            <input type="checkbox" name="item3_check" id="element_view" class="cta_toggle">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>

<?php require_once('./inc/footer.php') ?>