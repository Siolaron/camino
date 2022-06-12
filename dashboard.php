<?php
require_once('./inc/head.php') ?>

<main>
    <section class="dashboard">
        <div class="menu">
            <img src="./assets/img/logo_camino.jpg" alt="Logo Camino">
            <a href="dashboard.php"><h2>Dashboard</h2></a>
            <a href="index.php"><h2>Accueil</h2></a>
        </div>
        <div class="gestion">
            <div class="title_gestion">
                <h1>Panneau de contrôle</h1>
            </div>
            <div class="items_gestion">
                <div class="item">
                    <div class="title_item">
                        <h3>Item 1</h3>
                        <p>Boîte de gestion</p>
                    </div>
                    <form method="post" action="">
                        <div class="form_element">
                            <label for="element_name" class="item_label">Titre de l'élément 1</label>
                            <input type="text" name="element_name1" id="element_name">
                        </div>
                        <div class="form_element">
                            <label for="element_view" class="item_label">Afficher l'élément 1</label>
                            <input type="checkbox" name="element_view1" id="element_view">
                        </div>
                    </form>
                </div>
                <div class="item">
                    <div class="title_item">
                        <h3>Item 2</h3>
                        <p>Boîte de gestion</p>
                    </div>
                    <form method="post" action="">
                        <div class="form_element">
                            <label for="element_name" class="item_label">Titre de l'élément 2</label>
                            <input type="text" name="element_name2" id="element_name">
                        </div>
                        <div class="form_element">
                            <label for="element_view" class="item_label">Afficher l'élément 2</label>
                            <input type="checkbox" name="element_view2" id="element_view">
                        </div>
                    </form>
                </div>
                <div class="item">
                    <div class="title_item">
                        <h3>Item 3</h3>
                        <p>Boîte de gestion</p>
                    </div>
                    <form method="post" action="">
                        <div class="form_element">
                            <label for="element_name" class="item_label">Titre de l'élément 3</label>
                            <input type="text" name="element_name3" id="element_name">
                        </div>
                        <div class="form_element">
                            <label for="element_view" class="item_label">Afficher l'élément 3</label>
                            <input type="checkbox" name="element_view3" id="element_view">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>

<?php require_once('./inc/footer.php') ?>