(function () {

    "use strict";

    // Build map of words that we DO want to link

    var keywordsList = ["pulmonary", "pulmonary aspergilloma", "(pharyngitis)", "(stage", "(stage 1)", "(stage 2)", "(stage 3)", "(stage 4)", "- advanced", "- cricoid", "- cricoid cartilage", "- cricoid cartilage involvement", "- esophageal", "- esophageal involvement", "- knee", "- recurrent", "- recurrent laryngeal", "- recurrent laryngeal involvement", "- tracheal", "- tracheal involvement", "001", "3 confined", "3 extended", "a1c", "a1c levels", "a1c levels and healing", "abdominal", "abdominal pain", "ablation", "ablation for", "ablation for barret's", "ablation for barret's esophagus", "ablation for barrett's", "ablation for barrett's esophagus", "abrasion", "absorption", "achalasia", "achilles", "achilles tear", "acl", "acl repair", "acne", "acute", "acute bronchitis", "acute lymphocytic", "acute lymphocytic leukemia", "acute myeloid", "acute myeloid leukemia", "acute osteomyelitis", "acute osteomyelitis of the foot", "acute respiratory", "acute respiratory syndrome", "addison's", "addison's disease", "adenocarcinoma", "adhesions", "adrenal", "adrenal gland cancer", "adrenal gland disorders", "adult", "adult anatomy", "advanced", "allergic", "allergic rhinitis", "allergy", "alzheimer's", "alzheimer's disease", "amputations", "amyotrophic", "amyotrophic lateral", "amyotrophic lateral sclerosis", "anal", "anal cancer", "anastomosis", "anatomy", "anatomy of the thyroid", "anatomy tour", "anemia", "aneurysm", "aneurysms", "angina", "angiodysplasia", "angioplasty", "ankle", "ankle fracture", "ankle injuries", "ankle injuries and disorders", "ankle sprain", "ankylosing", "ankylosing spondylitis", "aortic", "aortic aneurysm", "aortic stenosis", "aphasia", "appendicitis", "arm", "arm injuries", "arm injuries and disorders", "arrhythmia", "arterial", "arterial disease", "arteriovenous", "arteriovenous malformations", "arteritis", "artery", "artery bypass", "artery bypass surgery", "artery close", "artery close up", "artery disease", "arthritis", "arthritis -", "arthritis - knee", "arthritis of the foot", "arthropathy", "asbestos", "aspergilloma", "asthma", "asthma in", "asthma in children", "astigmatism", "atherosclerosis", "athlete's", "athlete's foot", "atlas", "atrial", "atrial fibrillation", "atrial switch", "atrophic", "atrophic kidney", "atrophy", "attack", "autoimmune", "autoimmune diseases", "autonomic", "autonomic nervous", "autonomic nervous system", "autonomic nervous system disorders", "axis", "back", "back injuries", "back pain", "barret's", "barret's esophagus", "barrett's", "barrett's esophagus", "beating", "beating heart", "bell's", "bell's palsy", "beta", "beta 1", "beta 2", "bifida", "bile", "bile duct", "bile duct diseases", "biliary", "biliary tree", "biodigital", "biodigital beta", "biodigital beta 1", "biodigital beta 2", "biodigital human", "biopsy", "birth", "bladder", "bladder cancer", "bladder diseases", "bleeding", "bleeding disorders", "blepharitis", "blood", "blood and blood", "blood and blood disorders", "blood disorders", "blood pressure", "blood transfusion", "blood transfusion and donation", "body", "body disease", "bone", "bone cancer", "bone cross", "bone cross section", "bone diseases", "bone grafts", "bone infections", "bone marrow", "bone marrow diseases", "bone marrow transplantation", "bottom", "bottom foot", "bowel", "bowel incontinence", "bowel syndrome", "brain", "brain aneurysm", "brain cancer", "brain cross", "brain cross section", "brain diseases", "brain disorders", "brain injury", "brain malformations", "breast", "breast anatomy", "breast cancer", "breast cancer (stage", "breast cancer (stage 1)", "breast cancer (stage 2)", "breast cancer (stage 3)", "breast cancer (stage 4)", "breast diseases", "breast reconstruction", "breathing", "breathing and beating", "breathing and beating heart", "breathing problems", "bronchitis", "bunions", "bunions and overlapping", "bunions and overlapping toes", "bursitis", "by week", "bypass", "bypass surgery", "cancer", "cancer (stage", "cancer (stage 1)", "cancer (stage 2)", "cancer (stage 3)", "cancer (stage 4)", "cancer stage", "cancer stage 1", "cancer stage 2", "cancer stage 3", "cancer stage 3 confined", "cancer stage 3 extended", "cancer stage 4", "cancer stage m1", "cancer stage n1a", "cancer stage n1b", "cancer stage t1a", "cancer stage t1b", "cancer stage t2", "cancer stage t3", "cancer stage t3a", "cancer stage t3b", "cancer stage t4a", "cancer stage t4a -", "cancer stage t4a - cricoid", "cancer stage t4a - cricoid cartilage", "cancer stage t4a - cricoid cartilage involvement", "cancer stage t4a - esophageal", "cancer stage t4a - esophageal involvement", "cancer stage t4a - recurrent", "cancer stage t4a - recurrent laryngeal", "cancer stage t4a - recurrent laryngeal involvement", "cancer stage t4a - tracheal", "cancer stage t4a - tracheal involvement", "cancer stage t4b", "cancer stages", "carcinoma", "cardiac", "cardiac catheterization", "cardiomyopathy", "cardiovascular", "cardiovascular disease", "cardiovascular system", "carotid", "carotid stent", "carpal", "carpal tunnel", "carpal tunnel syndrome", "cartilage", "cartilage disorders", "cartilage involvement", "cataract", "cataract surgery", "catheterization", "cavity", "cavity of the tooth", "celiac", "celiac disease", "cell", "cell anemia", "cell arteritis", "cell carcinoma", "cell membrane", "cell transplantation", "cellulitis", "cellulitis and lymphangitis", "cellulitis and lymphangitis of the foot", "cerebral", "cerebral palsy", "cervical", "cervical cancer", "cervix", "cervix disorders", "cesarean", "cesarean section", "chalazion", "charcot", "charcot arthropathy", "chest", "chest pain", "childbirth", "children", "choking", "chronic", "chronic bronchitis", "chronic lymphocytic", "chronic lymphocytic leukemia", "chronic myeloid", "chronic myeloid leukemia", "chronic osteomyelitis", "chronic osteomyelitis of the foot", "cirrhosis", "claudication", "clavicle", "clavicle fracture", "claw", "claw toe", "close", "close up", "clostridium", "clostridium difficile", "clostridium difficile infections", "coccyx", "cochlear", "cochlear implant", "cognitive", "cognitive impairment", "colitis", "colon", "colon cancer", "colonic", "colonic diseases", "colonic polyps", "colonoscopy", "colonoscopy with", "colonoscopy with polyp", "colorectal", "colorectal cancer", "coma", "communication", "communication disorders", "complex", "complex regional", "complex regional pain", "complex regional pain syndrome", "complications", "complications tour", "concussion", "conduction", "conduction system", "confined", "congenital", "congenital heart", "congenital heart defects", "congestive", "congestive heart", "congestive heart failure", "conjunctivitis", "constipation", "copd", "cord", "cord diseases", "cord injuries", "corneal", "corneal abrasion", "coronary", "coronary artery", "coronary artery bypass", "coronary artery bypass surgery", "coronary artery disease", "coronary heart", "coronary heart disease", "cough", "cramps", "creutzfeldt-jakob", "creutzfeldt-jakob disease", "cricoid", "cricoid cartilage", "cricoid cartilage involvement", "crohn's", "crohn's disease", "cross", "cross section", "cross section of the breast", "cross section of the kidney", "croup", "cryotherapy", "cryotherapy ablation", "cryotherapy ablation for", "cryotherapy ablation for barret's", "cryotherapy ablation for barret's esophagus", "cryotherapy ablation for barrett's", "cryotherapy ablation for barrett's esophagus", "cyanotic", "cyanotic toes", "cyst", "cystic", "cystic fibrosis", "cystitis", "cysts", "d lvhyyp", "d lvhyyp lenlarge", "d lvhyyp lenlarge 01", "deep", "deep skin", "deep skin and soft", "deep skin and soft tissue", "deep skin and soft tissue infections", "deep skin and soft tissue infections of the foot", "deep vein", "deep vein thrombosis", "defects", "defibrillators", "deformity", "degeneration", "degeneration retinal", "degeneration retinal cross", "degeneration retinal cross section", "degenerative", "degenerative nerve", "degenerative nerve diseases", "delirium", "dementia", "dental", "dental implant", "detachment", "detail", "detailed", "detailed breast", "detailed breast anatomy", "device", "diabetes", "diabetes insipidus", "diabetes type", "diabetes type 1", "diabetes type 2", "diabetic", "diabetic artery", "diabetic foot", "diabetic foot complications", "diabetic foot complications tour", "diabetic kidney", "diabetic kidney problems", "diabetic nerve", "diabetic nerve problems", "diabetic retinopathy", "dialysis", "diarrhea", "difficile", "difficile infections", "digestive", "digestive diseases", "digestive system", "direct", "direct device", "disease", "disease of bone", "diseases", "disk", "dislocations", "disorders", "diverticulitis", "diverticulosis", "diverticulosis and diverticulitis", "donation", "dry", "dry eyes", "duct", "duct diseases", "duodenal", "duodenal ulcer", "dystrophy", "ear", "ear cross", "ear cross section", "ear infection", "ebola", "eczema", "effects", "effects of smoking", "effects of smoking inside", "effects of smoking inside the lungs", "egd", "elbow", "elbow injuries", "elbow injuries and disorders", "embolic", "embolic stroke", "embolism", "emphysema", "encephalitis", "endobutton", "endobutton direct", "endobutton direct device", "endocrine", "endocrine diseases", "endocrine system", "endometriosis", "endometriosis -", "endometriosis - advanced", "endoscopy", "eosinophilic", "eosinophilic disorders", "epiglottitis", "epilepsy", "esophageal", "esophageal achalasia", "esophageal adenocarcinoma", "esophageal involvement", "esophageal squamous", "esophageal squamous cell", "esophageal squamous cell carcinoma", "esophageal stricture", "esophageal varices", "esophagitis", "esophagogastroduodenoscopy", "esophagogastroduodenoscopy egd", "esophagus", "esophagus disorders", "extended", "eye", "eye anatomy", "eye anatomy tour", "eye cross", "eye cross section", "eye floaters", "eyes", "failure", "fascia", "fasciitis", "feet", "female", "female adult", "female adult anatomy", "female lymphatic", "female lymphatic system", "female reproductive", "female reproductive system", "female reproductive system tour", "female skeletal", "female skeletal system", "female whole", "female whole body", "fertilization", "fibrillation", "fibroids", "fibrosis", "finger", "finger fractures", "fingertip", "fingertip amputations", "fistula", "fistula of the intestines", "fistula of the rectum", "flat", "flat feet", "flexor", "flexor tendon", "flexor tendon injuries", "floaters", "food", "food allergy", "foot", "foot anatomy", "foot complications", "foot complications tour", "foot health", "foot injuries", "foot injuries and disorders", "foot ulcers", "for", "for barret's", "for barret's esophagus", "for barrett's", "for barrett's esophagus", "fracture", "fractured", "fractured ribs", "fractured vertebrae", "fractures", "fungal", "fungal nail", "fungal nail infection", "gallbladder", "gallbladder and biliary", "gallbladder and biliary tree", "gallbladder cancer", "gallbladder diseases", "gallstones", "ganglion", "ganglion cyst", "gangrene", "gas", "gastric", "gastric staple", "gastritis", "gastroenteritis", "gastroenterology", "gastroenterology anatomy", "gastroenterology anatomy tour", "gastrointestinal", "gastrointestinal bleeding", "genetic", "genetic brain", "genetic brain disorders", "gerd", "giant", "giant cell", "giant cell arteritis", "gingivitis", "gland cancer", "gland disorders", "glaucoma", "glucose", "glucose absorption", "glucose transport", "glucose transport and diabetes", "golf", "golf swing", "grafts", "growth", "growth disorders", "haglund's", "haglund's deformity", "hand fractures", "hand injuries", "hand injuries and disorders", "hand nerve", "hand nerve injuries", "head", "head and neck", "head and neck cancer", "headache", "healing", "health", "heart", "heart anatomy", "heart attack", "heart conduction", "heart conduction system", "heart defects", "heart disease", "heart diseases", "heart failure", "heart hh153", "heart hh153 001", "heart hh73", "heart hh73 r", "heart hh73 r 01", "heart hh96", "heart hh96 d", "heart hh96 d lvhyyp", "heart hh96 d lvhyyp lenlarge", "heart hh96 d lvhyyp lenlarge 01", "heart surgery", "heart transplantation", "heart valve", "heart valve diseases", "heartburn", "hemoglobin", "hemoglobin a1c", "hemoglobin a1c levels", "hemoglobin a1c levels and healing", "hemophilia", "hemorrhage", "hemorrhagic", "hemorrhagic stroke", "hemorrhoids", "hepatitis", "hepatitis a", "hepatitis b", "hepatitis c", "hernia", "herniated", "herniated disk", "herpes", "herpes simplex", "hh153", "hh153 001", "hh73", "hh73 r", "hh73 r 01", "hh96", "hh96 d", "hh96 d lvhyyp", "hh96 d lvhyyp lenlarge", "hh96 d lvhyyp lenlarge 01", "hiatal", "hiatal hernia", "high", "high blood", "high blood pressure", "hip", "hip injuries", "hip injuries and disorders", "hip replacement", "hiv/aids", "hives", "hodgkin", "hodgkin disease", "hormones", "hpv", "human", "huntington's", "huntington's disease", "hydrocephalus", "hypertension", "hyperthyroidism", "hypothyroidism", "hysterectomy", "ileoanal", "ileoanal anastomosis", "ileocecal", "ileocecal valve", "immune", "immune system", "immune system and disorders", "impairment", "imperfecta", "implant", "implantable", "implantable defibrillators", "impulse", "in children", "incontinence", "infection", "infections", "infections of the foot", "infectious", "infectious arthritis", "infectious diseases", "infectious mononucleosis", "infertility", "inflammatory", "inflammatory disease", "injuries", "injuries and disorders", "injury", "inner", "inner ear", "inner ear infection", "insertions", "insertions of the lower", "insertions of the lower limb", "insertions of the upper", "insertions of the upper limb", "inside", "inside the lungs", "insipidus", "insulin", "insulin and glucose", "insulin production", "interstitial", "interstitial cystitis", "interstitial keratitis", "interstitial lung", "interstitial lung diseases", "intestinal", "intestinal cancer", "intestinal obstruction", "intestine", "intestine disorders", "intestine tissue", "intestine tissue detail", "intestines", "intolerance", "intussusception", "involvement", "irritable", "irritable bowel", "irritable bowel syndrome", "is the skeletal", "is the skeletal system?", "ischemic", "ischemic attack", "islet", "islet cell", "islet cell transplantation", "islets", "islets of the pancreas", "iud", "jaundice", "jaw", "jaw injuries", "jaw injuries and disorders", "john", "john surgery", "johns", "joint", "joint disorders", "juvenile", "juvenile rheumatoid", "juvenile rheumatoid arthritis", "kawasaki", "kawasaki disease", "keratitis", "keratoconus", "kidney", "kidney cancer", "kidney disease", "kidney diseases", "kidney failure", "kidney problems", "kidney stones", "kidney transplantation", "kienb\u00f6ck's", "kienb\u00f6ck's disease", "knee", "knee injuries", "knee injuries and disorders", "knee replacement", "lactose", "lactose intolerance", "laryngeal", "laryngeal involvement", "lateral", "lateral sclerosis", "leg", "leg injuries", "leg injuries and disorders", "leishmaniasis", "lenlarge", "lenlarge 01", "leukemia", "levels", "levels and healing", "lewy", "lewy body", "lewy body disease", "ligaments", "limb", "liver", "liver cancer", "liver diseases", "liver transplantation", "loss", "loss surgery", "low", "low blood", "low blood pressure", "lower", "lower limb", "lumbar", "lumbar vertebra", "lumpectomy", "lung", "lung cancer", "lung cancer stage", "lung cancer stage 1", "lung cancer stage 2", "lung cancer stage 3", "lung cancer stage 4", "lung diseases", "lung transplantation", "lungs", "lupus", "lvhyyp", "lvhyyp lenlarge", "lvhyyp lenlarge 01", "lyme", "lyme disease", "lymph", "lymph node", "lymph node cross", "lymph node cross section", "lymphangitis", "lymphangitis of the foot", "lymphatic", "lymphatic diseases", "lymphatic system", "lymphedema", "lymphocytic", "lymphocytic leukemia", "lymphoma", "macular", "macular degeneration", "macular degeneration retinal", "macular degeneration retinal cross", "macular degeneration retinal cross section", "maculopapular", "maculopapular rash", "malabsorption", "malabsorption syndromes", "malaria", "male", "male adult", "male adult anatomy", "male lymphatic", "male lymphatic system", "male reproductive", "male reproductive system", "male reproductive system cross", "male reproductive system cross section", "male reproductive system tour", "male skeletal", "male skeletal system", "male whole", "male whole body", "malformations", "mallet", "mallet finger", "mammography", "marrow", "marrow diseases", "marrow transplantation", "mastectomy", "mechanics", "melanoma", "membrane", "memory", "meningitis", "menopause", "menstruation", "mesothelioma", "migraine", "mild", "mild cognitive", "mild cognitive impairment", "miscarriage", "mitral", "mitral stenosis", "mitral valve", "mitral valve prolapse", "mononucleosis", "multiple", "multiple myeloma", "multiple sclerosis", "muscle", "muscle cramps", "muscle cross", "muscle cross section", "muscle disorders", "muscular", "muscular atrophy", "muscular dystrophy", "muscular system", "muscular vsd", "musculoskeletal", "musculoskeletal system", "musculoskeletal system of the foot", "musculoskeletal system of the knee", "musculoskeletal system of the lower", "musculoskeletal system of the lower limb", "myelodysplastic", "myelodysplastic syndromes", "myelofibrosis", "myeloid", "myeloid leukemia", "myeloma", "myositis", "n1a", "n1b", "nail", "nail infection", "nausea", "nausea and vomiting", "neck", "neck cancer", "neck injuries", "neck injuries and disorders", "nerve", "nerve diseases", "nerve disorders", "nerve impulse", "nerve injuries", "nerve problems", "nervous", "nervous system", "nervous system disorders", "neural", "neural tube", "neural tube defects", "neuralgia", "neuroblastoma", "neurofibromatosis", "neurologic", "neurologic diseases", "neuromuscular", "neuromuscular disorders", "neuropathy", "node", "node biopsy", "node cross", "node cross section", "none", "normal", "normal foot", "normal foot anatomy", "obstruction", "ocular", "ocular hypertension", "origins", "origins and insertions", "origins and insertions of the lower", "origins and insertions of the lower limb", "origins and insertions of the upper", "origins and insertions of the upper limb", "osteoarthritis", "osteogenesis", "osteogenesis imperfecta", "osteomyelitis", "osteomyelitis of the foot", "osteonecrosis", "osteoporosis", "ostomy", "outer", "outer ear", "outer ear infection", "ovarian", "ovarian cancer", "ovarian cysts", "ovarian disorders", "ovarian failure", "overlapping", "overlapping toes", "pacemakers", "pacemakers and implantable", "pacemakers and implantable defibrillators", "paget's", "paget's disease", "paget's disease of bone", "pain", "pain syndrome", "palpation", "palpation of pulses", "palsy", "pancreas", "pancreas transplantation", "pancreatic", "pancreatic cancer", "pancreatic diseases", "pancreatitis", "paraesophageal", "paraesophageal hernia", "parathyroid", "parathyroid disorders", "parkinson's", "parkinson's disease", "patellar", "patellar tendon", "pediatric", "pediatric heart", "pelvic", "pelvic inflammatory", "pelvic inflammatory disease", "pelvis", "pelvis cross", "pelvis cross section", "pemphigus", "peptic", "peptic ulcer", "pericardial", "pericardial disorders", "perimembranous", "perimembranous vsd", "periodontitis", "peripheral", "peripheral arterial", "peripheral arterial disease", "peripheral artery", "peripheral artery disease", "peripheral nerve", "peripheral nerve disorders", "peripheral neuropathy", "peripheral vascular", "peripheral vascular disease", "pheochromocytoma", "pigmentosa", "pinguecula", "pituitary", "pituitary disorders", "pituitary tumors", "plantar", "plantar fasciitis", "platelet", "platelet disorders", "pneumocystis", "pneumocystis infections", "pneumonia", "polio", "polio and post-polio", "polio and post-polio syndrome", "polycystic", "polycystic kidney", "polycystic kidney disease", "polyp", "polypectomy", "polyps", "post-polio", "post-polio syndrome", "pouchitis", "pregnancy", "pregnancy by", "pregnancy by week", "premature", "premature ovarian", "premature ovarian failure", "premenstrual", "premenstrual syndrome", "pressure", "problems", "proctitis", "production", "progressive", "progressive supranuclear", "progressive supranuclear palsy", "prolapse", "prostate", "prostate anatomy", "prostate anatomy tour", "prostate cancer", "prostate cancer stage", "prostate cancer stage 1", "prostate cancer stage 2", "prostate cancer stage 3", "prostate cancer stage 3 confined", "prostate cancer stage 3 extended", "prostate cancer stage 4", "prostate cancer stage t2", "prostate cancer stage t3a", "prostate cancer stage t3b", "prostate cancer stages", "prostate cross", "prostate cross section", "prostate diseases", "prosthetic", "prosthetic running", "prosthetic running leg", "psoriasis", "psoriatic", "psoriatic arthritis", "pterygium", "ptosis", "pulmonary", "pulmonary aspergilloma", "pulmonary embolism", "pulmonary fibrosis", "pulmonary hypertension", "pulses", "quadrangular", "quadrangular resection", "r 01", "rash", "raynaud's", "raynaud's disease", "reconstruction", "rectal", "rectal cancer", "rectum", "recurrent", "recurrent laryngeal", "recurrent laryngeal involvement", "regional", "regional pain", "regional pain syndrome", "repair", "replacement", "reproductive", "reproductive system", "reproductive system cross", "reproductive system cross section", "reproductive system tour", "resection", "respiratory", "respiratory syncytial", "respiratory syncytial virus", "respiratory syncytial virus infections", "respiratory syndrome", "respiratory system", "rest", "rest pain", "retina", "retina detail", "retinal", "retinal cross", "retinal cross section", "retinal detachment", "retinitis", "retinitis pigmentosa", "retinoblastoma", "retinopathy", "rheumatoid", "rheumatoid arthritis", "rhinitis", "ribs", "rickets", "rns", "rocker", "rocker bottom", "rocker bottom foot", "rosacea", "rotavirus", "running", "running leg", "running mechanics", "sacrum", "sacrum and coccyx", "salmonella", "scaphoid", "scaphoid wrist", "scaphoid wrist fracture", "sciatica", "sclerosis", "scoliosis", "section", "section of the breast", "section of the kidney", "seizures", "sentinel", "sentinel node", "sentinel node biopsy", "severe", "severe acute", "severe acute respiratory", "severe acute respiratory syndrome", "shingles", "shock", "shoulder", "shoulder injuries", "shoulder injuries and disorders", "sickle", "sickle cell", "sickle cell anemia", "simplex", "sjogren's", "sjogren's syndrome", "skeletal", "skeletal system", "skeletal system of the elbow", "skeletal system of the foot", "skeletal system of the hip", "skeletal system of the knee", "skeletal system of the lower", "skeletal system of the lower limb", "skeletal system of the shoulder", "skeletal system of the spine", "skeletal system of the upper", "skeletal system of the upper limb", "skeletal system?", "skin", "skin and soft", "skin and soft tissue", "skin and soft tissue infections", "skin and soft tissue infections of the foot", "skin tissue", "skin tissue detail", "small", "small intestine", "small intestine disorders", "small intestine tissue", "small intestine tissue detail", "small intestines", "smoker's", "smoker's artery", "smoker's lungs", "smoking", "smoking inside", "smoking inside the lungs", "soft", "soft tissue", "soft tissue infections", "soft tissue infections of the foot", "sore", "sore throat", "sore throat (pharyngitis)", "speech", "speech and communication", "speech and communication disorders", "spina", "spina bifida", "spinal", "spinal cord", "spinal cord diseases", "spinal cord injuries", "spinal muscular", "spinal muscular atrophy", "spinal stenosis", "spine", "spleen", "spleen diseases", "spondylitis", "sprain", "sprained", "sprained thumb", "sprains", "sprains and strains", "squamous", "squamous cell", "squamous cell carcinoma", "stage", "stage 1", "stage 2", "stage 3", "stage 3 confined", "stage 3 extended", "stage 4", "stage m1", "stage n1a", "stage n1b", "stage t1a", "stage t1b", "stage t2", "stage t3", "stage t3a", "stage t3b", "stage t4a", "stage t4a -", "stage t4a - cricoid", "stage t4a - cricoid cartilage", "stage t4a - cricoid cartilage involvement", "stage t4a - esophageal", "stage t4a - esophageal involvement", "stage t4a - recurrent", "stage t4a - recurrent laryngeal", "stage t4a - recurrent laryngeal involvement", "stage t4a - tracheal", "stage t4a - tracheal involvement", "stage t4b", "stages", "staple", "stenosis", "stent", "stomach", "stomach cancer", "stomach detail", "stomach disorders", "stomach tissue", "stomach tissue detail", "stomach ulcers", "stones", "strains", "stricture", "stroke", "stye", "subarterial", "subarterial vsd", "subconjunctival", "subconjunctival hemorrhage", "supranuclear", "supranuclear palsy", "surgery", "swallowing", "swallowing disorders", "swing", "switch", "syncope", "syncytial", "syncytial virus", "syncytial virus infections", "syndrome", "syndromes", "syringomyelia", "system", "system and disorders", "system cross", "system cross section", "system disorders", "system of the elbow", "system of the foot", "system of the hip", "system of the knee", "system of the lower", "system of the lower limb", "system of the shoulder", "system of the spine", "system of the upper", "system of the upper limb", "system tour", "system?", "t1a", "t1b", "t3a", "t3b", "t4a", "t4a -", "t4a - cricoid", "t4a - cricoid cartilage", "t4a - cricoid cartilage involvement", "t4a - esophageal", "t4a - esophageal involvement", "t4a - recurrent", "t4a - recurrent laryngeal", "t4a - recurrent laryngeal involvement", "t4a - tracheal", "t4a - tracheal involvement", "t4b", "tachycardia", "tailbone", "tailbone disorders", "tear", "tendinitis", "tendon", "tendon injuries", "testicular", "testicular cancer", "testicular disorders", "thalassemia", "thoracic", "thoracic vertebra", "throat", "throat (pharyngitis)", "throat anatomy", "throat anatomy tour", "throat cross", "throat cross section", "throat disorders", "thrombosis", "thumb", "thymus", "thyroid", "thyroid anatomy", "thyroid cancer", "thyroid cancer stage", "thyroid cancer stage m1", "thyroid cancer stage n1a", "thyroid cancer stage n1b", "thyroid cancer stage t1a", "thyroid cancer stage t1b", "thyroid cancer stage t2", "thyroid cancer stage t3", "thyroid cancer stage t4a", "thyroid cancer stage t4a -", "thyroid cancer stage t4a - cricoid", "thyroid cancer stage t4a - cricoid cartilage", "thyroid cancer stage t4a - cricoid cartilage involvement", "thyroid cancer stage t4a - esophageal", "thyroid cancer stage t4a - esophageal involvement", "thyroid cancer stage t4a - recurrent", "thyroid cancer stage t4a - recurrent laryngeal", "thyroid cancer stage t4a - recurrent laryngeal involvement", "thyroid cancer stage t4a - tracheal", "thyroid cancer stage t4a - tracheal involvement", "thyroid cancer stage t4b", "thyroid diseases", "thyroid treatments", "tissue", "tissue detail", "tissue infections", "tissue infections of the foot", "toe", "toe injuries", "toe injuries and disorders", "toes", "tommy", "tommy john", "tommy john surgery", "tommy johns", "tooth", "tooth cross", "tooth cross section", "torn", "torn patellar", "torn patellar tendon", "tour", "tourette", "tourette syndrome", "tracheal", "tracheal disorders", "tracheal involvement", "tract", "tract infections", "transfusion", "transfusion and donation", "transient", "transient ischemic", "transient ischemic attack", "transplantation", "transport", "transport and diabetes", "transposition", "traumatic", "traumatic brain", "traumatic brain injury", "treatments", "tree", "trichomoniasis", "trigeminal", "trigeminal neuralgia", "tube", "tube defects", "tuberculosis", "tumor", "tumors", "tunnel", "tunnel syndrome", "type", "type 1", "type 2", "ulcer", "ulcerative", "ulcerative colitis", "ulcers", "ulnar", "ulnar claw", "ulnar tunnel", "ulnar tunnel syndrome", "upper", "upper limb", "urinary", "urinary incontinence", "urinary system", "urinary tract", "urinary tract infections", "urination", "urine", "urine and urination", "uterine", "uterine cancer", "uterine diseases", "uterine fibroids", "uveitis", "vaginal", "vaginal birth", "vaginal bleeding", "vaginal cancer", "vaginal diseases", "valve", "valve diseases", "valve prolapse", "varices", "varicose", "varicose veins", "vascular", "vascular disease", "vascular diseases", "vasculitis", "vasovagal", "vasovagal syncope", "vein", "vein thrombosis", "veins", "ventricular", "ventricular fibrillation", "vertebra", "vertebrae", "villi", "villi of small", "villi of small intestines", "viral", "viral infections", "virus", "virus infections", "viscera", "viscera and fascia", "visible", "visible heart", "visible heart hh153", "visible heart hh153 001", "visible heart hh73", "visible heart hh73 r", "visible heart hh73 r 01", "visible heart hh96", "visible heart hh96 d", "visible heart hh96 d lvhyyp", "visible heart hh96 d lvhyyp lenlarge", "visible heart hh96 d lvhyyp lenlarge 01", "vomiting", "vsd", "vulvar", "vulvar cancer", "vulvar disorders", "week", "weight", "weight loss", "weight loss surgery", "what", "what is", "what is the skeletal", "what is the skeletal system?", "whole", "whole body", "whooping", "whooping cough", "wilms'", "wilms' tumor", "with", "with polyp", "wrist", "wrist fracture", "wrist injuries", "wrist injuries and disorders", "wrist sprain", "yeast", "yeast infections", "zombie", "zombie anatomy"];


    var keywords = {};

    for (var i = 0, len = keywordsList.length; i < len; i++) {
        keywords[keywordsList[i].trim()] = true;
    }

    var baseURL = "https://human.biodigital.com";

    /**
     * Within all text within a given DOM element, creates a link for each word that
     * corresponds to content in the Human content database.
     */
    window.linker = new (function () {

        this.baseURL = baseURL;

        /**
         * Create links for recognized words within a DOM element.
         *
         * @param container The DOM element.
         * @param done Callback fired when all links created.
         * @returns {*}
         */
        this.createLinks = function (container, done) {
            this.getLinks(container,
                function (link) {
                    createLink(container, link);
                },
                done);
        };

        /**
         * Create links for recognized words within a DOM element.
         *
         * @param container The DOM element.
         * @param callback Callback fired for each link found
         * @param done Callback fired when all links found
         */
        this.getLinks = function (container, callback, done) {

            var words = findWords(container);

            if (words.length === 0) {
                return false;
            }

            queryWords(words, callback, done);
        };
    })();

    function findWords(container) { // Finds keywords within an element

        // Get the words

        var wordsList = $("#" + container.id + " *").contents().map(function () {
            if (this.nodeType == 3 && this.nodeValue.trim() != "") //check for nodetype text and ignore empty text nodes
                return this.nodeValue.trim().split(/\W+/);  //split the nodevalue to get words.
        }).get(); //get the array of words.

        // Find recognized keywords and their usage counts

        var word;
        var map = {};
        var item;
        var words = [];

        var skipNext = false;
        for (var i = 0, len = wordsList.length; i < len; i++) {
        	if (skipNext) {
        		skipNext = false;
        		continue;
        	}
        	if (i < len - 1) {
        		word = wordsList[i] + " " + wordsList[i + 1];
        		if (keywords[word]) {
        			item = map[word];
	                if (item) {
	                    item.count++;
	                } else {
	                    item = {word: word, count: 1};
	                    map[word] = item;
	                    words.push(item);
	                }
	                skipNext = true;
        			continue;
        		}
        	}
            word = wordsList[i];
            if (keywords[word]) {
                item = map[word];
                if (item) {
                    item.count++;
                } else {
                    item = {word: word, count: 1};
                    map[word] = item;
                    words.push(item);
                }
            }
        }

        return words;
    }

    function queryWords(words, callback, done) {
        var queries = words.length;
        for (var i = 0, len = words.length; i < len; i++) {
            queryWord(words[i], function (item) {
                callback(item);
                if (--queries >= 0) {
                    done();
                }
            });
        }
    }

    function queryWord(item, callback) {

        var word = item.word;
        var count = item.count;

        $.getJSON(baseURL + "/search/conditions?q=" + word,
            function (data) {

                callback({
                    word: word,
                    count: count,
                    results: data.results
                });
            });
    }

    function createLink(container, link) {

        var word = link.word;
        var results = link.results;

        if (word === "") {
            return;
        }

        if (results.length === 0) {
            return;
        }

        var result = results[0];

        try {
            var regex = RegExp(word, 'gi');
        } catch (e) {
            console.error("Invalid regex: " + e);
            return;
        }

        findAndReplaceDOMText(container, { // Defined in lib/jquery/plugins/jquery.ba-replacetext.min.js
            find: regex,
            replace: function (portion, match) {

                var span = document.createElement('span');
                span.innerHTML = portion.text;

                var img = document.createElement('img');
                img.src = baseURL + result.thumbnail_url;

                span.appendChild(img);

                return span;
            },
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE
        });
    }

})();
