/* ============================================================
   ETHNICITIES OF FARSALA — PRESENTATION SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    const slidesData = [

        // --------------------------------------------------------
        // SLIDE 1 — Εισαγωγή
        // --------------------------------------------------------
        {
            title: "Εισαγωγή: Πολιτισμικό Μωσαϊκό",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <p class="slide-text">
                            Τα Φάρσαλα κατοικούνται σήμερα από έναν <strong>μικτό πληθυσμό</strong> με διάφορες ιστορικές καταβολές. Οι ομάδες αυτές δεν αποτελούν «φυλές», αλλά <strong>ενδο-ελλαδικές εθνοτοπικές ομάδες</strong> ή πολιτισμικές ομάδες που συνέβαλαν στη διαμόρφωση της περιοχής.
                        </p>

                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Nationalities-Farsala/main/%CE%A6%CE%B1%CF%81%CF%83%CE%B1%CE%BB%CE%B1.jpg"
                                 alt="Φάρσαλα" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ στην εικόνα για μεγέθυνση</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-map-marked-alt"></i> Η Γεωγραφική Θέση</h3>
                            <p class="box-text">Η περιοχή των Φαρσάλων βρίσκεται στην κεντρική Θεσσαλία, σε στρατηγική θέση μεταξύ των ορέων και των πεδινών εκτάσεων, γεγονός που επηρέασε την πολιτισμική της πολυμορφία.</p>
                        </div>

                        <div class="quote-box">
                            <p>«Οι διαφορετικές εθνοτικές ομάδες συνέβαλαν καθοριστικά στο σχηματισμό της σύγχρονης ταυτότητας της περιοχής.»</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 2 — Οι κύριες ομάδες
        // --------------------------------------------------------
        {
            title: "Εισαγωγή: Οι Κύριες Ομάδες",
            content: `
                <p class="slide-text">
                    Ο πληθυσμός των Φαρσάλων αποτελείται από τέσσερις κύριες εθνοτικές ομάδες, καθεμία με την ιδιαίτερη ιστορική και πολιτισμική της κληρονομιά.
                </p>

                <div class="cards-grid">
                    <div class="info-card">
                        <h3>Καραγκούνηδες</h3>
                        <p>Η κύρια γεωργική ομάδα του Θεσσαλικού κάμπου</p>
                    </div>
                    <div class="info-card">
                        <h3>Σαρακατσάνοι</h3>
                        <p>Παραδοσιακά νομάδες κτηνοτρόφοι</p>
                    </div>
                    <div class="info-card">
                        <h3>Βλάχοι</h3>
                        <p>Ημινομαδικοί πολιτισμικοί φορείς</p>
                    </div>
                    <div class="info-card">
                        <h3>Πρόσφυγες &amp; Μετανάστες</h3>
                        <p>Οι νέοι πληθυσμοί του 20ού αιώνα</p>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 3 — Καραγκούνηδες: Ρόλος
        // --------------------------------------------------------
        {
            title: "1. Οι Καραγκούνηδες: Ρόλος &amp; Καταγωγή",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <h3 class="box-title"><i class="fas fa-seedling"></i> Η Κύρια Γεωργική Ομάδα</h3>
                        <ul class="bullet-list">
                            <li><strong>Ρόλος:</strong> Είναι η κύρια γεωργική εθνοτοπική ομάδα του Θεσσαλικού κάμπου, συμπεριλαμβανομένης της περιοχής των Φαρσάλων.</li>
                            <li><strong>Καταγωγή:</strong> Θεωρούνται απόγονοι <strong>αυτόχθονων ελληνικών πληθυσμών</strong> της Θεσσαλίας, μόνιμα εγκατεστημένοι στα πεδινά.</li>
                        </ul>

                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-lightbulb"></i> Η σημασία των Καραγκούνηδων</h3>
                            <p class="box-text">Αποτελούσαν τη βάση της αγροτικής παραγωγής στην περιοχή, με βαθιές ρίζες που χρονολογούνται από τους προβυζαντινούς χρόνους.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-chart-bar"></i> Καραγκούνηδες σε αριθμούς</h3>
                            <div class="stats-list">
                                <div class="stat-row">
                                    <span class="stat-label">Πληθυσμός Θεσσαλίας (19ος αι.)</span>
                                    <span class="stat-value">~40%</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">Κύρια ασχολία</span>
                                    <span class="stat-value">Γεωργία</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">Κατοικία</span>
                                    <span class="stat-value">Μόνιμη</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 4 — Καραγκούνηδες: Ιστορία
        // --------------------------------------------------------
        {
            title: "1. Οι Καραγκούνηδες: Ιστορία &amp; Όνομα",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <h3 class="box-title"><i class="fas fa-scroll"></i> Ιστορική Αναδρομή</h3>
                        <ul class="bullet-list">
                            <li><strong>Ιστορία:</strong> Αποτελούσαν τον βασικό αγροτικό πληθυσμό που ζούσε και εργαζόταν στα μεγάλα <strong>τσιφλίκια</strong> ως κολίγοι, με καθοριστικό ρόλο στους αγώνες για τη διανομή της γης.</li>
                            <li><strong>Όνομα:</strong> Προέρχεται από το τουρκικό <strong>«Kara-gön»</strong> ή <strong>«Kara-kojun»</strong> (μαύρο γουνί / ρούχο), πιθανόν λόγω των σκουρόχρωμων ρούχων τους ή της ενασχόλησής τους με τη «μαύρη γη».</li>
                        </ul>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-tractor"></i> Η Ζωή στους Αγρούς</h3>
                            <p class="box-text">Οι Καραγκούνηδες ζούσαν σε μικρές αγροτικές κοινότητες, ασχολούμενοι κυρίως με την καλλιέργεια σιτηρών και βαμβακιού, καθώς και με την κτηνοτροφία για τις οικιακές ανάγκες.</p>
                        </div>

                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Nationalities-Farsala/main/%CE%9A%CE%B1%CF%81%CE%B1%CE%B3%CE%BA%CE%BF%CF%8D%CE%BD%CE%B7%CF%821.jpg"
                                 alt="Καραγκούνηδες" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                        </div>

                        <div class="quote-box">
                            <p>«Οι Καραγκούνηδες αποτελούσαν τη ραχοκοκαλιά της αγροτικής παραγωγής στη Θεσσαλία.»</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 5 — Σαρακατσάνοι: Ρόλος
        // --------------------------------------------------------
        {
            title: "2. Οι Σαρακατσάνοι: Ρόλος &amp; Μετακίνηση",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <h3 class="box-title"><i class="fas fa-mountain"></i> Οι Νομάδες Κτηνοτρόφοι</h3>
                        <ul class="bullet-list">
                            <li><strong>Ρόλος:</strong> Παραδοσιακά νομαδική ελληνική ομάδα, γνωστή για την αποκλειστική ενασχόληση με την <strong>κτηνοτροφία</strong> (πρόβατα).</li>
                            <li><strong>Μετακίνηση:</strong> Ακολουθούσαν τον <strong>ορεινό-πεδινό νομαδισμό</strong>, μετέχοντας τους χειμώνες (διαχείμαση) στα πεδινά της Θεσσαλίας, συμπεριλαμβανομένων των Φαρσάλων.</li>
                        </ul>

                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-award"></i> Η Τέχνη της Κτηνοτροφίας</h3>
                            <p class="box-text">Οι Σαρακατσάνοι διέθεταν εξειδικευμένες γνώσεις στην αναπαραγωγή και εκτροφή προβάτων, καθώς και στην παραγωγή γαλακτοκομικών προϊόντων και ερίων.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-sync-alt"></i> Κύκλος Νομαδικής Ζωής</h3>
                            <ul class="bullet-list">
                                <li><strong>Άνοιξη:</strong> Μετακίνηση προς τα βουνά για καλοκαιρινή βοσκή</li>
                                <li><strong>Καλοκαίρι:</strong> Βοσκή στα ορεινά λιβάδια</li>
                                <li><strong>Φθινόπωρο:</strong> Κατάβαση προς τα πεδινά</li>
                                <li><strong>Χειμώνας:</strong> Διαχείμαση στους Θεσσαλικούς κάμπους</li>
                            </ul>
                        </div>

                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Nationalities-Farsala/main/%CE%9A%CE%B1%CF%81%CE%B1%CE%B3%CE%BA%CE%BF%CF%85%CE%BD%CE%B7%CF%822.jpg"
                                 alt="Σαρακατσάνοι" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 6 — Σαρακατσάνοι: Κατοικία
        // --------------------------------------------------------
        {
            title: "2. Οι Σαρακατσάνοι: Κατοικία &amp; Σήμερα",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <h3 class="box-title"><i class="fas fa-home"></i> Ο Βίος των Σαρακατσάνων</h3>
                        <ul class="bullet-list">
                            <li><strong>Κατοικία:</strong> Σταθμεύοντας, ζούσαν σε πρόχειρες, κινητές <strong>καλύβες</strong> (<em>τσαντίρια</em>).</li>
                            <li><strong>Σήμερα:</strong> Μετά τον 20ό αιώνα, έχουν <strong>μόνιμα εγκατασταθεί</strong> στα Φάρσαλα και τα χωριά, διατηρώντας την κτηνοτροφία, αλλά εγκαταλείποντας τον νομαδικό βίο.</li>
                        </ul>

                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-users"></i> Η Κοινωνική Οργάνωση</h3>
                            <p class="box-text">Οι Σαρακατσάνοι οργανώνονταν σε φατρίες (γένη) με ισχυρές οικογενειακές δομές. Ο γεροντότερος άνδρας της οικογένειας (πρωτοπάππας) είχε την ηγεσία.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-star"></i> Κληρονομιά Σαρακατσάνων</h3>
                            <ul class="bullet-list">
                                <li><strong>Παραδοσιακή Φορεσία:</strong> Χαρακτηριστικά κεντημένα φορέματα με γεωμετρικά σχέδια.</li>
                                <li><strong>Μουσική Παράδοση:</strong> Ιδιαίτερα δημοτικά τραγούδια και χοροί.</li>
                                <li><strong>Γαλακτοκομικά Προϊόντα:</strong> Παραδοσιακά τυριά και γιαούρτια.</li>
                            </ul>
                        </div>

                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Nationalities-Farsala/main/%CE%A3%CE%B1%CF%81%CE%B1%CE%BA2.jpg"
                                 alt="Σαρακατσάνοι" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 7 — Βλάχοι: Γλώσσα
        // --------------------------------------------------------
        {
            title: "3. Οι Βλάχοι: Γλώσσα &amp; Απασχόληση",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <h3 class="box-title"><i class="fas fa-language"></i> Οι Ημινομαδικοί Πολιτισμικοί Φορείς</h3>
                        <ul class="bullet-list">
                            <li><strong>Γλώσσα:</strong> Είναι <strong>βλαχόφωνη (Αρμανική)</strong> ομάδα, μια νεολατινική διάλεκτος, αλλά με ισχυρή <strong>ελληνική εθνική συνείδηση</strong>.</li>
                            <li><strong>Απασχόληση:</strong> Ασχολούνταν με την <strong>ημινομαδική κτηνοτροφία</strong> και, ιστορικά, ήταν σημαντικοί <strong>έμποροι</strong> και μεταφορείς (καραβάνια).</li>
                        </ul>

                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-book"></i> Η Γλωσσική Κληρονομιά</h3>
                            <p class="box-text">Η βλάχικη γλώσσα, αν και σε παρακμή σήμερα, αποτελεί ζωντανό μνημείο της νεολατινικής γλωσσικής οικογένειας στην Ελλάδα.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-comments"></i> Γλωσσικό Δείγμα</h3>
                            <div class="quote-box">
                                <p>«Μπάνε σαράτσα λατσά.»<br><span style="font-size:0.85em;opacity:0.85">(Πηγαίνω στο δρόμο μπροστά.)</span></p>
                            </div>
                            <div class="stats-list">
                                <div class="stat-row">
                                    <span class="stat-label">Ελληνικά: Πρόβατο</span>
                                    <span class="stat-value">Οαί</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">Ελληνικά: Αγελάδα</span>
                                    <span class="stat-value">Βάκα</span>
                                </div>
                            </div>
                        </div>

                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Nationalities-Farsala/main/%CE%92%CE%BB%CE%B1%CF%87%CE%BF%CE%B91.jpg"
                                 alt="Βλάχοι" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 8 — Βλάχοι: Εγκατάσταση
        // --------------------------------------------------------
        {
            title: "3. Οι Βλάχοι: Εγκατάσταση &amp; Παρουσία",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <h3 class="box-title"><i class="fas fa-map-pin"></i> Κατοικία και Δραστηριότητες</h3>
                        <ul class="bullet-list">
                            <li><strong>Εγκατάσταση:</strong> Κατοικούσαν κυρίως σε ορεινά βλαχοχώρια (Πίνδος, Άγραφα).</li>
                            <li><strong>Παρουσία στα Φάρσαλα:</strong> Η παρουσία τους στην περιοχή ήταν κυρίως για <strong>διαχείμαση</strong> και <strong>εμπόριο</strong>, με μόνιμες εγκαταστάσεις στις ημιορεινές ζώνες της επαρχίας.</li>
                        </ul>

                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-shopping-cart"></i> Το Εμπόριο των Βλάχων</h3>
                            <p class="box-text">Οι Βλάχοι ανέπτυξαν εκτεταμένα εμπορικά δίκτυα, μεταφέροντας αγαθά μεταξύ των ορεινών και πεδινών περιοχών. Η εμπορική τους δραστηριότητα επεκτάθηκε ακόμα και στην Κεντρική Ευρώπη.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-palette"></i> Πολιτισμική Κληρονομιά</h3>
                            <ul class="bullet-list">
                                <li><strong>Μουσική Παράδοση:</strong> Χαρακτηριστικά δημοτικά τραγούδια και οργανική μουσική.</li>
                                <li><strong>Παραδοσιακές Τέχνες:</strong> Υφαντική, ξυλογλυπτική και ασημουργική.</li>
                                <li><strong>Γαστρονομία:</strong> Παραδοσιακά πιάτα βασισμένα στην κτηνοτροφία.</li>
                                <li><strong>Ετήσιες Εκδηλώσεις:</strong> Γιορτές και πανηγύρια με ιδιαίτερες παραδόσεις.</li>
                            </ul>
                        </div>

                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Nationalities-Farsala/main/%CE%92%CE%BB%CE%B1%CF%87%CE%BF%CE%B92.jpg"
                                 alt="Βλάχοι 2" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 9 — Πρόσφυγες
        // --------------------------------------------------------
        {
            title: "4. Πρόσφυγες &amp; Μετανάστες: Πρόσφυγες",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <h3 class="box-title"><i class="fas fa-globe"></i> Η Συμβολή του 20ού Αιώνα</h3>
                        <ul class="bullet-list">
                            <li>
                                <strong>Πρόσφυγες (μετά το 1922):</strong>
                                <div class="nested">
                                    Κυρίως <strong>Μικρασιάτες</strong> (π.χ. από την Καισάρεια) που εγκαταστάθηκαν μετά την ανταλλαγή πληθυσμών. Συνέβαλαν καθοριστικά στην οικονομία, εισάγοντας την τεχνογνωσία για την <strong>καλλιέργεια της φακής Φαρσάλων</strong>.
                                </div>
                            </li>
                        </ul>

                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-heart"></i> Η Προσφυγική Εμπειρία</h3>
                            <p class="box-text">Οι πρόσφυγες από τη Μικρά Ασία έφεραν μαζί τους όχι μόνο τεχνογνωσίες, αλλά και πλούσια πολιτισμικά στοιχεία — από την κουζίνα έως τη μουσική και τις τέχνες — εμπλουτίζοντας τον πολιτισμικό ιστό της περιοχής.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-history"></i> Ιστορικό Χρονολόγιο</h3>
                            <div class="stats-list">
                                <div class="stat-row">
                                    <span class="stat-label">1922</span>
                                    <span class="stat-value">Προσφυγική εισροή από Μ. Ασία</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">1923</span>
                                    <span class="stat-value">Συνθήκη Λωζάννης</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">1924-1930</span>
                                    <span class="stat-value">Εγκατάσταση σε αγροτικές περιοχές</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">1930s</span>
                                    <span class="stat-value">Ανάπτυξη καλλιέργειας φακής</span>
                                </div>
                            </div>
                        </div>

                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Nationalities-Farsala/main/%CE%9C%CE%B9%CE%BA%CF%81%CE%B1%CF%831.jpg"
                                 alt="Μικρασιάτες" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 10 — Εσωτερικοί Μετανάστες
        // --------------------------------------------------------
        {
            title: "4. Πρόσφυγες &amp; Μετανάστες: Εσωτερικοί Μετανάστες",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <h3 class="box-title"><i class="fas fa-route"></i> Εσωτερική Μετακίνηση Πληθυσμού</h3>
                        <ul class="bullet-list">
                            <li>
                                <strong>Εσωτερικοί Μετανάστες:</strong>
                                <div class="nested">
                                    Άνθρωποι από τα γύρω χωριά και τα ορεινά που μετακινήθηκαν προς την πόλη των Φαρσάλων, ιδίως μετά τον Β' Παγκόσμιο Πόλεμο, για καλύτερες υπηρεσίες και ευκαιρίες (αστικοποίηση).
                                </div>
                            </li>
                        </ul>

                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-building"></i> Η Αστικοποίηση των Φαρσάλων</h3>
                            <p class="box-text">Η εσωτερική μετανάστευση προς τα Φάρσαλα οδήγησε σε σημαντική αστική ανάπτυξη και δημιούργησε έναν νέο τύπο αστικής ταυτότητας που συνδύαζε στοιχεία από διαφορετικές εθνοτικές ομάδες.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-bullseye"></i> Αιτίες Εσωτερικής Μετανάστευσης</h3>
                            <ul class="bullet-list">
                                <li><strong>Οικονομικές Ευκαιρίες:</strong> Αναζήτηση εργασίας στον αστικό ιστό.</li>
                                <li><strong>Εκπαιδευτικές Ανάγκες:</strong> Πρόσβαση σε σχολεία και εκπαιδευτικά ιδρύματα.</li>
                                <li><strong>Υγειονομική Πρόνοια:</strong> Πρόσβαση σε ιατρικές υπηρεσίες και νοσοκομεία.</li>
                                <li><strong>Βελτίωση Διαβίωσης:</strong> Αναζήτηση καλύτερων συνθηκών διαβίωσης.</li>
                            </ul>
                        </div>

                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Nationalities-Farsala/main/%CE%9C%CE%B9%CE%BA%CF%81%CE%B1%CF%832.jpg"
                                 alt="Μικρασιάτες 2" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                        </div>

                        <div class="quote-box">
                            <p>«Η εσωτερική μετανάστευση συνέβαλε στην ανάπτυξη των Φαρσάλων ως σημαντικού αστικού κέντρου της περιοχής.»</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 11 — Συμπέρασμα
        // --------------------------------------------------------
        {
            title: "Συμπέρασμα: Η Σύγχρονη Εικόνα",
            content: `
                <div class="concluding-grid">
                    <div class="split-column">
                        <p class="slide-text">
                            Σήμερα, ο πληθυσμός των Φαρσάλων είναι <strong>ενιαία ελληνική εθνότητα</strong>. Η πολιτισμική ποικιλομορφία προκύπτει από την ιστορική συνύπαρξη και ανάμειξη όλων των παραπάνω ομάδων.
                        </p>

                        <div class="highlight-box">
                            <p class="box-text"><strong>Η σύγχρονη ταυτότητα διατηρείται ζωντανή</strong> μέσα από τα τοπικά έθιμα, τους πολιτιστικούς συλλόγους και τις παραδόσεις.</p>
                        </div>

                        <div class="cards-grid">
                            <div class="info-card">
                                <h3><i class="fas fa-hands-helping"></i> Πολιτισμική Συνύπαρξη</h3>
                                <p>Αρμονική συμβίωση διαφορετικών παραδόσεων</p>
                            </div>
                            <div class="info-card">
                                <h3><i class="fas fa-seedling"></i> Οικονομική Συνεργασία</h3>
                                <p>Συνδυασμός αγροτικής και κτηνοτροφικής παράδοσης</p>
                            </div>
                        </div>
                    </div>

                    <div class="legacy-card">
                        <h3>Η Κληρονομιά των Φαρσάλων</h3>
                        <ul class="legacy-list">
                            <li><i class="fas fa-check-circle"></i><span>Πολιτισμική πολυμορφία και αλληλεπίδραση</span></li>
                            <li><i class="fas fa-check-circle"></i><span>Συνύπαρξη νομαδικών και αγροτικών παραδόσεων</span></li>
                            <li><i class="fas fa-check-circle"></i><span>Ενσωμάτωση προσφυγικών κοινοτήτων</span></li>
                            <li><i class="fas fa-check-circle"></i><span>Διατήρηση τοπικών παραδόσεων και γλωσσικών στοιχείων</span></li>
                        </ul>
                        <p class="legacy-quote">«Η δύναμη ενός τόπου βρίσκεται στην πολυμορφία των ανθρώπων που τον κατοικούν.»</p>
                    </div>
                </div>
            `
        }

    ];

    // --------------------------------------------------------
    // DOM REFERENCES
    // --------------------------------------------------------
    const slidesContainer = document.getElementById('slides-container');
    const prevBtn         = document.getElementById('prevBtn');
    const nextBtn         = document.getElementById('nextBtn');
    const progressBar     = document.getElementById('progress-bar');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan  = document.getElementById('totalPages');
    const modal           = document.getElementById('imageModal');
    const modalImage      = document.getElementById('modalImage');
    const closeModalBtn   = document.querySelector('.close-modal');

    let currentPageIndex = 1;
    const totalPages = slidesData.length;

    totalPagesSpan.textContent = totalPages;

    // --------------------------------------------------------
    // BUILD ALL SLIDES
    // --------------------------------------------------------
    function buildSlides() {
        slidesData.forEach((slide, idx) => {
            const el = document.createElement('div');
            el.className = 'slide';
            el.id = 'page-' + (idx + 1);

            el.innerHTML = `
                <div class="slide-content">
                    <h2 class="slide-title">${slide.title}</h2>
                    ${slide.content}
                </div>
            `;

            slidesContainer.appendChild(el);
        });

        // Activate first
        document.getElementById('page-1').classList.add('active');

        // Attach image click handlers
        attachImageHandlers();
    }

    // --------------------------------------------------------
    // IMAGE MODAL HANDLERS
    // --------------------------------------------------------
    function attachImageHandlers() {
        document.querySelectorAll('.clickable-image').forEach(img => {
            img.addEventListener('click', () => {
                modalImage.src = img.src;
                modalImage.alt = img.alt || '';
                modal.classList.add('active');
            });
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        modalImage.src = '';
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modalImage) {
            closeModal();
        }
    });

    // --------------------------------------------------------
    // NAVIGATION
    // --------------------------------------------------------
    function updateProgress() {
        const pct = (currentPageIndex / totalPages) * 100;
        progressBar.style.width = pct + '%';
        currentPageSpan.textContent = currentPageIndex;
    }

    function showPage(index) {
        if (index < 1 || index > totalPages) return;

        document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));

        const target = document.getElementById('page-' + index);
        if (target) {
            target.classList.add('active');
            target.scrollTop = 0;
        }

        currentPageIndex = index;
        prevBtn.disabled = (index === 1);
        nextBtn.disabled = (index === totalPages);

        if (index === totalPages) {
            nextBtn.innerHTML = 'Τέλος';
        } else {
            nextBtn.innerHTML = 'Επόμενη <i class="fas fa-arrow-right"></i>';
        }

        updateProgress();
    }

    function nextPage() {
        if (currentPageIndex < totalPages) showPage(currentPageIndex + 1);
    }

    function prevPage() {
        if (currentPageIndex > 1) showPage(currentPageIndex - 1);
    }

    // --------------------------------------------------------
    // EVENT LISTENERS
    // --------------------------------------------------------
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) {
                closeModal();
                return;
            }
        }

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevPage();
        } else if (e.key === 'Home') {
            e.preventDefault();
            showPage(1);
        } else if (e.key === 'End') {
            e.preventDefault();
            showPage(totalPages);
        }
    });

    // Touch swipe
    let touchStartX = 0;
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const threshold = 50;

        if (touchEndX < touchStartX - threshold && currentPageIndex < totalPages) {
            nextPage();
        } else if (touchEndX > touchStartX + threshold && currentPageIndex > 1) {
            prevPage();
        }
    }, { passive: true });

    // --------------------------------------------------------
    // INITIALIZE
    // --------------------------------------------------------
    buildSlides();
    showPage(1);
});