let request = window.indexedDB.open("stations", 1),
    db,
    tx,
    store,
    index;

request.onupgradeneeded = function(e) {
    let db = request.result,
        store = db.createObjectStore("QuestionStore", {keyPath:"qID"}),
        index = store.createIndex("questionText", "questionText",{unique: false});
}

request.onerror = function(e){
    console.log("there was an error" + e.target.errorCode);
};

request.onsuccess = function(e){
    db = request.result;
    tx = db.transaction("QuestionStore", "readwrite");
    store = tx.objectStore("QuestionStore");
    index = store.index("questionText");

    db.onerror = function(e) {
        console.log("ERROR");
    }
    
    store.put({qID: 2, questionText: "The grass is green.",
        correctAnswer: true, studentAnswer: true, result: true
    });

    tx.oncomplete = function(){
        db.close();
    };

};