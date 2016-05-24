  $(function() {
    var terms = [
      {label: "Samblés", desc: "Είναι ο καραμελωμένος καρπός. Υπάρχουν 2 τύποι samples: 1 μέρος καρπού με 1,5 μέρος ζάχαρης. Έχει σαν αποτέλεσμα ζάχαρη με μέρη καρπού. ½ μέρος ζάχαρης με 1 μέρος καρπού. Έχει σαν αποτέλεσμα καρπό με μέρη ζάχαρης γύρω του. Εκτέλεση: Βάζουμε την ζάχαρη σε ένα κατσαρολάκι και λίγο νερό (ίσα ίσα να την βρέξουμε) για να λιώσει και να γίνει για λίγο σιρόπι ή να καραμελώσει, έπειτα ρίχνουμε μέσα τα φουντούκια και κάνουμε σαμπλάζ."},
      {label: "TPT (Tout Pour Tout)", desc: "Γαλλικά για την έκφραση «όσο τόσο», δηλαδή όταν εμφανίζεται δίπλα σε υλικό εννοούμε ότι η ποσότητά του θα είναι μισή σε ζάχαρη άχνη. Π.χ. 400γρ. TPT καρύδα = 200γρ. καρύδα + 200γρ. άχνη ζάχαρη. "},
      {label: "Αλεύρι [%]", desc: "Μετράμε το αλεύρι σύμφωνα με τα ποσοστά γλουτένης που περιέχει."},
      {label: "Βούτυρο", desc: "Εννοούμε το αγελαδινό βούτυρο 82% περιεκτικότητας σε λίπος, 16% υγρασία και 2% άλλα στέρεα που βοηθούν στην γαλακτοματοποίηση."},
      {label: "Γάλα", desc: "Εννοούμε το αγελαδινό γάλα 3.5% περιεκτικότητας σε λίπος."},
      {label: "Γαλακτοματοποίηση", desc: "Είναι η διαδικασία κατά την οποία ενσωματώνουμε 2 υλικά τα οποία είναι αντίθετα από τη φύση τους (συνήθως λιπαρό και υγρό, π.χ. λάδι με νερό) στην σωστή θερμοκρασία και με την βοήθεια ενός τρίτου υλικού (γαλακτοματοποιητή). Στην περίπτωση της σοκολάτας, όταν γίνεται η γαλακτοματοποίσή της πρέπει να προσέξουμε η αύξηση της θερμοκρασίας της να γίνει σταδιακά. Αν αυξήσουμε απότομα την θερμοκρασία της σοκολάτας τα λιπαρά της θα αυξηθούν απότομα και αυτό θα έχει σαν αποτέλεσμα τα υλικά της να είναι διαφορετικά κατανεμημένα (αυτό επηρεάζει την γεύση του γλυκού, δηλαδή σε κάποιο σημείο του να έχουμε περισσότερο την αίσθηση του βουτύρου ή του κακάο, κλπ.)."},
      {label: "Γκανάζ", desc: "Οτιδήποτε φτιάχνεται με σοκολάτα και χρησιμοποιείται ως γέμιση."},
      {label: "Γλασάζ", desc: "Οτιδήποτε φτιάχνεται με σοκολάτα και χρησιμοποιείται ως επικάλυψη"},
      {label: "Ζάχαρη", desc: "Εννοούμε την άσπρη κρυσταλλική ζάχαρη."},
      {label: "Ζάχαρη βανίλιας", desc: "Το προϊόν που παίρνουμε από την πρόσμιξη 1 κιλού άχνης ζάχαρης και 250γρ. κλωνάρια βανίλιας."},
      {label: "Ζελατίνη", desc: "Προϊόν που παίρνουμε από το εσωτερικό των μοσχαρίσιων κοκάλων."},
      {label: "Ιμβερτοζάχαρο", desc: "Είναι μείγμα γλυκόζης και οπωροσακχάρου που λαμβάνεται από την υδρόλυση της σακχαρόζης. Είναι πιο γλυκό από τη σακχαρόζη και χρησιμοποιείται σε πολλά τρόφιμα ως γλυκαντική ύλη."},
      {label: "Ινφουζιόν", desc: "Διαδικασία κατά την οποία ενσωματώνουμε τα στοιχεία ενός προϊόντος (συνήθως μπαχαρικών ή μυρωδικών) σε ένα υγρό."},
      {label: "Κόψιμο", desc: "Όταν αποτύχει κάποιο υλικό να απορροφήσει ένα άλλο που του βάζουμε."},
      {label: "Κρεμέ", desc: "Είναι κρέμες που είναι πυκνές, δεν περιέχουν αέρα και όταν τις ανακατέψουμε με κρέμα γάλακτος σε μορφή σαντιγί παίρνουμε μια μούς."},
      {label: "Κρεμόριο", desc: "Κοινή ονομασία του όξινου τρυγικού καλίου που χρησιμοποιείται στη ζαχαροπλαστική, τη φαρμακευτική κλπ. Από τα σταφύλια λαμβάνεται ο μούστος κατά τη ζύμωση του οποίου καθιζάνει σταδιακά η τρυγία, μια ακάθαρτη μορφή όξινου τρυγικού καλίου. Με ανακρυστάλλωση της τρυγίας και χρήση αποχρωματιστικών μέσων (π.χ. ενεργός άνθρακας) λαμβάνεται καθαρό όξινο τρυγικό κάλιο γνωστό ως κρεμόριο ή κρεμοτάρταρο (cream of tartar), το οποίο χρησιμοποιείται στη μαγειρική και στη ζαχαροπλαστική. Το κρεμόριο είναι σκόνη που βοηθάει να δοθεί περισσότερος όγκος στην μαρέγκα και μία πιό κρεμώδης σύσταση στα ζαχαρούχα επιδόρπια όπως η καραμέλα και το παγωτό."},
      {label: "Μαρέγκα", desc: "Τρόπος χτυπήματος (μείγμα με αέρα) που επιτυγχάνεται στο μίξερ με μέση σταθερή ταχύτητα και σύρμα."},
      {label: "Μασκάρω", desc: "Αλείφω με λιπαρή ουσία (λάδι ή βούτυρο) και αλεύρι μια επιφάνεια ψησίματος όπως ένα ταψί ή μια φόρμα."},
      {label: "Μιρουάρ", desc: "Οτιδήποτε χρησιμοποιείται ως επικάλυψη και έχει χρώμα σοκολάτας αλλά είναι κακάο."},
      {label: "Μοντέ", desc: "Τρόπος χτυπήματος (μισοχτυπημένο μείγμα)."},
      {label: "Μούς", desc: "Προϊόν που παίρνουμε από το ανακάτεμα μιας κρεμέ και κρέμας γάλακτος σε μορφή σαντιγί. (βλ. «κρεμέ»)."},
      {label: "Ντεγκλασάζ", desc: "Διαδικασία κατά την οποία ρίχνουμε ένα υγρό (συνήθως κρέμα γάλακτος) σε στεγνή καραμέλα."},
      {label: "Πορτοκάλι κονφί", desc: "Προϊόν που παίρνουμε όταν βράσουμε τουλάχιστον 3 φορές ίσα κομμάτια φλούδας πορτοκαλιού με διαφορετικό νερό κάθε φορά (αυτή η διαδικασία λέγεται ξεπίκρισμα) και στην συνέχεια τα αναμείξουμε με το βάρος τους σε ζάχαρη πάνω στη φωτιά ώσπου να καραμελώσουν. Το κονφί ουσιαστικά είναι τρόπος συντήρησης αφού μετά την διαδικασία μπορούμε να διατηρήσουμε τις φλούδες για πολύ μεγάλο χρονικό διάστημα."},
      {label: "Πούδρα", desc: "Αμύγδαλα (ή άλλοι καρποί) που έχουμε θρυμματίσει τόσο ώστε να γίνουν σκόνη. Όταν λέμε πούδρα εννοούμε πάντα την πούδρα αμυγδάλου, για οποιαδήποτε άλλη θα πρέπει να σημειωθεί ποια εννοούμε."},
      {label: "Σαμπλάζ", desc: "Διαδικασία κατά την οποία ανακατεύουμε συνεχώς τη ζάχαρη ώσπου να περάσει τις 3 φάσεις της και να επανέλθει στην κανονική της μορφή."},
      {label: "Σιρόπι (Baumé/Brix/Γράδα)", desc: "Σιρόπι ονομάζουμε το διάλυμα ζαχαρούχων γλυκαντικών υλών. Η πυκνότητα του μετράται με πυκνόμετρο ή διαθλασίμετρο, σε βαθμούς μπωμέ (Baumé) ή σε βαθμούς μπριξ (Brix). Κάθε βαθμός Brix αντιστοιχεί σε 1% σάκχαρο στο ζαχαροδιάλυμα, ενώ ένας βαθμός Baumé ισοδυναμεί με περιεκτικότητα σε σάκχαρα 1,75%. Για τη μετατροπή των Baumé σε Brix χρησιμοποιούμε τον τύπο οBrix = οBaumé*1,8. Στις κουζίνες, ο όρος που έχει επικρατήσει είναι αυτός των γράδων τα οποία αντιστοιχούν στη μονάδα των Baumé και μετρώνται με το πυκνόμετρο.Κατάσταση ζάχαρηςΠυκνότητα g./ml.ΟBaumé"},
      {label: "Σοκολάτα [%]", desc: "Μετράμε τις σοκολάτες σε ποσοστό του αθροίσματος της κακαόμαζας (βούτυρο + κακαόμαζα). Όσο περισσότερο βούτυρο τόσο πιο σκληρή είναι η σοκολάτα και τόσο ασθενής η γεύση της σοκολάτας.  Το υπόλοιπο ποσοστό είναι ζάχαρη και 2-3% γαλακτοματοποιητές."},
      {label: "Σούπερ έξτρα αλεύρι", desc: "Αλεύρι που περιέχει ενισχυμένη γλουτένη."},
      {label: "Σταχτόνερο", desc: "Ή αλλιώς αλουσιά. Είναι νερό στο οποίο έχουμε βράσει μια ποσότητα στάχτης με σκοπό αυτή να απελευθερώσει μέσα του διοξείδιο του άνθρακα και να χρησιμεύσει ως γαλακτοματοποιητής."},
      ];
 
    var accentMap = {
      "ή": "η", "Ή": "Η",
      "ά": "α", "Ά": "Α",
      "ό": "ο", "Ό": "Ο",
      "έ": "ε", "Έ": "Ε",
      "ί": "ι", "Ί": "Ι",
      "ύ": "υ", "Ύ": "Υ",
      "ώ": "ω", "Ώ": "Ω",
      "ϊ": "ι"
    };
    var normalize = function( term ) {
      var ret = "";
      for ( var i = 0; i < term.length; i++ ) {
        ret += accentMap[ term.charAt(i) ] || term.charAt(i);
      }
      return ret;
    };
 
    $( "#term" ).autocomplete({
      minLength: 2,
      source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
        response( $.grep( terms, function( value ) {
          value = value.label || value.value || value;
          return matcher.test( value ) || matcher.test( normalize( value ) );
        }) );
      },
      select: function( event, ui ) {
        $( "#term" ).val( ui.item.label );
        $( "#term-label" ).html( ui.item.label );
        $( "#term-description" ).html( ui.item.desc );
 
        return false;
      }
    })
        .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<a>" + item.label )
        .appendTo( ul );
    };

  });
