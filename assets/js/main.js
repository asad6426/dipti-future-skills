(function(){

  var TECH = [
    {code:"EMG-AI01", name:"Artificial Intelligence", desc:"Core AI concepts, applied reasoning systems and intelligent automation for real business problems.", career:"AI Engineer / Analyst"},
    {code:"EMG-AI02", name:"Generative AI", desc:"Large language models, prompt engineering and generative pipelines for text, image and code.", career:"GenAI Developer"},
    {code:"EMG-ML", name:"Machine Learning", desc:"Predictive modelling, supervised and unsupervised learning, model evaluation and deployment.", career:"ML Engineer"},
    {code:"EMG-BC", name:"Blockchain & Web3", desc:"Distributed ledgers, smart contracts and decentralized application development.", career:"Web3 Developer"},
    {code:"EMG-RA", name:"Robotics & Automation", desc:"Robotic systems, control logic and industrial automation fundamentals.", career:"Automation Specialist"},
    {code:"EMG-XR", name:"AR/VR & Extended Reality", desc:"Immersive experience design across augmented, virtual and mixed reality.", career:"XR Developer"},
    {code:"EMG-3D", name:"3D Animation & Visualization", desc:"3D modelling, animation pipelines and visualization for media and product design.", career:"3D Artist"},
    {code:"EMG-SE", name:"Software Engineering", desc:"Engineering practices, architecture and lifecycle discipline behind production software.", career:"Software Engineer"},
    {code:"EMG-CY", name:"Cybersecurity", desc:"Threat analysis, defensive security and secure systems design.", career:"Security Analyst"},
    {code:"EMG-CL", name:"Cloud Computing", desc:"Cloud infrastructure, scalable architecture and managed platform services.", career:"Cloud Engineer"},
    {code:"EMG-DO", name:"DevOps & SRE", desc:"CI/CD pipelines, infrastructure automation and reliability engineering.", career:"DevOps Engineer"},
    {code:"EMG-DS", name:"Data Science & Analytics", desc:"Statistical analysis, data pipelines and decision-support analytics.", career:"Data Analyst"},
    {code:"EMG-IOT", name:"Internet of Things", desc:"Connected devices, sensor networks and embedded system integration.", career:"IoT Engineer"},
    {code:"EMG-GD", name:"Game Development", desc:"Game design, engine development and interactive entertainment production.", career:"Game Developer"},
    {code:"EMG-QC", name:"Quantum Computing", desc:"Quantum algorithms, qubits and early-stage quantum-safe computing concepts.", career:"Research Associate"},
    {code:"EMG-DT", name:"Digital Twin", desc:"Virtual replicas of physical systems for simulation, monitoring and optimisation.", career:"Simulation Engineer"},
    {code:"EMG-FT", name:"FinTech", desc:"Technology-driven financial services, payments infrastructure and digital banking.", career:"FinTech Analyst"},
    {code:"EMG-ERP", name:"Enterprise ERP & SAP", desc:"Enterprise resource planning systems and SAP-based business process management.", career:"ERP Consultant"},
    {code:"EMG-FS", name:"Full Stack Development", desc:"End-to-end web application development across frontend and backend layers.", career:"Full Stack Developer"},
    {code:"EMG-ABT", name:"AI-Powered Business Transformation", desc:"Applying AI strategically to redesign operations, product and decision-making.", career:"Digital Transformation Lead"}
  ];

  var PROGRAMS = [
    {title:"PGD in Artificial Intelligence & Machine Learning", type:"PGD", tech:"AI", level:"Advanced", mode:"Hybrid"},
    {title:"PGD in Data Science & Analytics", type:"PGD", tech:"Data Science", level:"Advanced", mode:"Hybrid"},
    {title:"PGD in Cybersecurity", type:"PGD", tech:"Cybersecurity", level:"Advanced", mode:"Hybrid"},
    {title:"PGD in Blockchain & Web3", type:"PGD", tech:"Blockchain", level:"Advanced", mode:"Hybrid"},
    {title:"PGD in Robotics & Automation", type:"PGD", tech:"Robotics", level:"Advanced", mode:"On Campus"},
    {title:"PGD in Digital Transformation", type:"PGD", tech:"Other", level:"Professional", mode:"Hybrid"},
    {title:"Professional Diploma in AI & Generative AI", type:"Professional Diploma", tech:"AI", level:"Intermediate", mode:"Online"},
    {title:"Professional Diploma in Blockchain Technology & Web3", type:"Professional Diploma", tech:"Blockchain", level:"Intermediate", mode:"Online"},
    {title:"Professional Diploma in Robotics & Automation", type:"Professional Diploma", tech:"Robotics", level:"Intermediate", mode:"On Campus"},
    {title:"Professional Diploma in AR/VR", type:"Professional Diploma", tech:"AR/VR", level:"Intermediate", mode:"On Campus"},
    {title:"Professional Diploma in Software Engineering", type:"Professional Diploma", tech:"Software Engineering", level:"Intermediate", mode:"Hybrid"},
    {title:"Professional Diploma in Cloud Computing & DevOps", type:"Professional Diploma", tech:"Cloud", level:"Intermediate", mode:"Online"},
    {title:"Professional Diploma in IoT & Smart Systems", type:"Professional Diploma", tech:"IoT", level:"Intermediate", mode:"On Campus"},
    {title:"Professional Diploma in AI-Enabled Business & Strategy", type:"Professional Diploma", tech:"Other", level:"Professional", mode:"Hybrid"},
    {title:"Advanced Diploma in 3D Animation & Visualization", type:"Advanced Diploma", tech:"3D Animation", level:"Advanced", mode:"On Campus"},
    {title:"Advanced Diploma in Game Development", type:"Advanced Diploma", tech:"Game Development", level:"Advanced", mode:"On Campus"},
    {title:"Advanced Diploma in Cybersecurity", type:"Advanced Diploma", tech:"Cybersecurity", level:"Advanced", mode:"Hybrid"},
    {title:"Advanced Diploma in Full Stack Development", type:"Advanced Diploma", tech:"Software Engineering", level:"Advanced", mode:"Hybrid"},
    {title:"Advanced Diploma in Digital Twin Technology", type:"Advanced Diploma", tech:"Other", level:"Advanced", mode:"On Campus"},
    {title:"Advanced Diploma in Quantum Computing", type:"Advanced Diploma", tech:"Other", level:"Advanced", mode:"On Campus"}
  ];

  function careerFor(tech){
    var map = {"AI":"AI Engineer / Analyst","Blockchain":"Web3 Developer","Robotics":"Automation Specialist","AR/VR":"XR Developer","Software Engineering":"Software Engineer","Cloud":"Cloud Engineer","IoT":"IoT Engineer","3D Animation":"3D Artist","Game Development":"Game Developer","Cybersecurity":"Security Analyst","Data Science":"Data Analyst","Other":"Domain Specialist"};
    return map[tech] || "Domain Specialist";
  }

  function progCardHTML(p){
    return '<div class="prog-card">'+
      '<div class="top"><span class="cat mono">'+p.type+'</span><span class="status-chip draft">Draft</span></div>'+
      '<h4>'+p.title+'</h4>'+
      '<div class="prog-meta"><span>'+p.tech+'</span><span>'+p.level+'</span><span class="tbc">Duration &mdash; TBC</span></div>'+
      '<p class="prog-outcome">Career outcome: '+careerFor(p.tech)+'.</p>'+
      '<div class="prog-actions"><a class="btn-link" href="#">View Program &rarr;</a><a class="btn-link" href="#apply">Apply Now &rarr;</a></div>'+
    '</div>';
  }

  // ---- Technology directory ----
  var techGrid = document.getElementById('tech-grid');
  techGrid.innerHTML = TECH.map(function(t){
    return '<div class="tech-card">'+
      '<span class="code mono">'+t.code+'</span>'+
      '<h4>'+t.name+'</h4>'+
      '<p>'+t.desc+'</p>'+
      '<div class="foot"><span class="career">'+t.career+'</span><a class="btn-link" href="#find-program">Explore &rarr;</a></div>'+
    '</div>';
  }).join('');

  // ---- Program tabs ----
  var TYPES = ["PGD","Professional Diploma","Advanced Diploma"];
  var tabsEl = document.getElementById('prog-tabs');
  var progGrid = document.getElementById('prog-grid');
  function renderTabProgs(type){
    progGrid.innerHTML = PROGRAMS.filter(function(p){return p.type===type;}).map(progCardHTML).join('');
  }
  tabsEl.innerHTML = TYPES.map(function(t,i){return '<button class="tab-btn'+(i===0?' active':'')+'" data-type="'+t+'">'+t+'</button>';}).join('');
  tabsEl.querySelectorAll('.tab-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      tabsEl.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      renderTabProgs(btn.dataset.type);
    });
  });
  renderTabProgs(TYPES[0]);

  // ---- Find your program filters ----
  var TECH_OPTS = ["AI","Blockchain","Robotics","AR/VR","Cybersecurity","Cloud","Software Engineering","Data Science","3D Animation","IoT","Game Development","Other"];
  var LEVEL_OPTS = ["Beginner","Intermediate","Advanced","Professional","Executive"];
  var TYPE_OPTS = ["PGD","Professional Diploma","Advanced Diploma","Certificate","Short Course","Micro-Credential"];
  var MODE_OPTS = ["On Campus","Online","Hybrid"];

  function fillSelect(el, opts, label){
    el.innerHTML = '<option value="">All '+label+'</option>' + opts.map(function(o){return '<option value="'+o+'">'+o+'</option>';}).join('');
  }
  var fTech = document.getElementById('f-tech'), fLevel = document.getElementById('f-level'), fType = document.getElementById('f-type'), fMode = document.getElementById('f-mode');
  fillSelect(fTech, TECH_OPTS, 'technologies');
  fillSelect(fLevel, LEVEL_OPTS, 'levels');
  fillSelect(fType, TYPE_OPTS, 'program types');
  fillSelect(fMode, MODE_OPTS, 'modes');

  var findGrid = document.getElementById('find-grid');
  var fCount = document.getElementById('f-count');
  function applyFilters(){
    var t = fTech.value, l = fLevel.value, ty = fType.value, m = fMode.value;
    var out = PROGRAMS.filter(function(p){
      return (!t || p.tech===t) && (!l || p.level===l) && (!ty || p.type===ty) && (!m || p.mode===m);
    });
    fCount.textContent = out.length + ' program' + (out.length===1?'':'s');
    findGrid.innerHTML = out.length ? out.map(progCardHTML).join('') : '<div class="empty-state" style="grid-column:1/-1;">No programs match this combination yet &mdash; try a broader filter.</div>';
  }
  [fTech,fLevel,fType,fMode].forEach(function(s){ s.addEventListener('change', applyFilters); });
  applyFilters();

  // ---- Career pathways ----
  var PATHS = [
    {domain:"Artificial Intelligence", steps:["Certificate","Professional Diploma","PGD","AI Professional"]},
    {domain:"Blockchain", steps:["Foundation","Blockchain Diploma","Web3 Professional"]},
    {domain:"Robotics", steps:["Foundation","Professional Diploma","Automation Specialist"]},
    {domain:"Software Engineering", steps:["Programming Foundation","Full Stack Diploma","Software Engineer"]},
    {domain:"Cybersecurity", steps:["Foundation","Advanced Diploma","Security Professional"]}
  ];
  document.getElementById('path-list').innerHTML = PATHS.map(function(p){
    return '<div class="path-row"><div class="path-domain">'+p.domain+'</div><div class="path-steps">'+
      p.steps.map(function(s,i){
        return '<span class="path-step"><span class="n">'+(i+1)+'</span>'+s+'</span>'+(i<p.steps.length-1?'<span class="path-arrow">&rarr;</span>':'');
      }).join('')+
    '</div></div>';
  }).join('');

  // ---- Learning flow ----
  var FLOW = ["Discover","Learn","Practice","Build","Certify","Advance"];
  document.getElementById('flow-row').innerHTML = FLOW.map(function(f,i){
    return '<div class="flow-step"><span class="n mono">0'+(i+1)+'</span><span class="t">'+f+'</span></div>' + (i<FLOW.length-1 ? '<div class="flow-conn"></div>' : '');
  }).join('');

  // ---- Industries ----
  var INDUSTRIES = [
    {name:"Banking & Finance", tech:["FinTech","Cybersecurity","AI"]},
    {name:"Manufacturing", tech:["Robotics & Automation","IoT","Digital Twin"]},
    {name:"Garments & Textiles", tech:["Robotics & Automation","IoT","ERP & SAP"]},
    {name:"Healthcare", tech:["AI","Data Science","IoT"]},
    {name:"Education", tech:["AI","AR/VR","Software Engineering"]},
    {name:"Retail & E-commerce", tech:["Data Science","AI","Cloud Computing"]},
    {name:"Telecommunications", tech:["Cloud Computing","IoT","Cybersecurity"]},
    {name:"Construction", tech:["Digital Twin","IoT","3D Visualization"]},
    {name:"Tourism & Hospitality", tech:["AR/VR","AI","Software Engineering"]},
    {name:"Government", tech:["Cybersecurity","Data Science","Cloud Computing"]},
    {name:"Logistics", tech:["IoT","AI","Data Science"]},
    {name:"Media & Entertainment", tech:["3D Animation","AR/VR","Game Development"]}
  ];
  var indChips = document.getElementById('industry-chips');
  var indPanel = document.getElementById('industry-panel');
  indChips.innerHTML = INDUSTRIES.map(function(ind,i){return '<button class="industry-chip'+(i===0?' active':'')+'" data-i="'+i+'">'+ind.name+'</button>';}).join('');
  function renderIndustry(i){
    var ind = INDUSTRIES[i];
    indPanel.innerHTML = '<div><span class="eyebrow" style="color:#2E7A82">Selected sector</span><h4 style="margin-top:10px;">'+ind.name+'</h4></div>'+
      '<div class="rel">'+ind.tech.map(function(t){return '<span>'+t+'</span>';}).join('')+'</div>';
  }
  indChips.querySelectorAll('.industry-chip').forEach(function(btn){
    btn.addEventListener('click', function(){
      indChips.querySelectorAll('.industry-chip').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      renderIndustry(+btn.dataset.i);
    });
  });
  renderIndustry(0);

  // ---- Batches (illustrative) ----
  var BATCHES = [
    {prog:"Professional Diploma in AI & Generative AI", batch:"Batch 14", start:"[TBA]", dur:"[TBA]", mode:"Online", seats:"Open"},
    {prog:"PGD in Cybersecurity", batch:"Batch 06", start:"[TBA]", dur:"[TBA]", mode:"Hybrid", seats:"Limited"},
    {prog:"Advanced Diploma in Full Stack Development", batch:"Batch 09", start:"[TBA]", dur:"[TBA]", mode:"Hybrid", seats:"Open"},
    {prog:"Professional Diploma in Cloud Computing & DevOps", batch:"Batch 05", start:"[TBA]", dur:"[TBA]", mode:"Online", seats:"Open"}
  ];
  document.getElementById('batch-body').innerHTML = BATCHES.map(function(b){
    return '<tr><td class="prog">'+b.prog+'</td><td>'+b.batch+'</td><td>'+b.start+'</td><td>'+b.dur+'</td><td>'+b.mode+'</td><td>'+b.seats+'</td><td><a class="btn-link" href="#apply">Apply &rarr;</a></td></tr>';
  }).join('');

  // ---- FAQ ----
  var FAQS = [
    ["What are emerging technology programs?", "Structured PGD, Diploma, Advanced Diploma, Certificate and Micro-Credential courses built around technologies such as AI, Blockchain, Robotics, Cybersecurity and Cloud Computing."],
    ["Who can join?", "Students, fresh graduates, working professionals, entrepreneurs and organizational teams across all of the domains listed in the directory above."],
    ["Do I need a programming background?", "It depends on the program and level. Beginner and Foundation-level tracks assume no prior background; Advanced and Professional tracks assume relevant experience."],
    ["What is the difference between PGD, Diploma and Certificate?", "Certificates are the shortest, skill-specific entry point. Diplomas build broader, structured competence. PGD (Postgraduate Diploma) is the most advanced, in-depth qualification level."],
    ["Are online programs available?", "Selected programs are offered online or in hybrid mode; see the Learning Mode filter above for each program's current format."],
    ["Are weekend classes available?", "Scheduling varies by program and batch. Confirmed batch timing will appear in the Upcoming Batches section once published."],
    ["Can working professionals join?", "Yes. Many programs are designed specifically for working professionals through evening, weekend or hybrid formats."],
    ["How can I apply?", "Select Apply Now on any program card, or use the Apply Now button in the navigation to start a request."],
    ["How can I contact DIPTI?", "Use the Contact details in the footer, or submit a Request Information form on any program page."]
  ];
  document.getElementById('faq-list').innerHTML = FAQS.map(function(f,i){
    return '<div class="faq-item"><button class="faq-q" data-i="'+i+'"><span>'+f[0]+'</span><span class="ind">+</span></button><div class="faq-a"><p>'+f[1]+'</p></div></div>';
  }).join('');
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.closest('.faq-item');
      var body = item.querySelector('.faq-a');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o){ o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
      if(!isOpen){ item.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
    });
  });

  // ---- Future Skills Map ----
  var NODES = [
    {key:"AI", name:"Artificial Intelligence", desc:"Applied intelligence, reasoning systems and automation across the curriculum.", rel:["PGD in AI & ML","Professional Diploma in AI & Generative AI"]},
    {key:"Data", name:"Data Science & Analytics", desc:"Turning raw data into structured, decision-ready insight.", rel:["PGD in Data Science & Analytics"]},
    {key:"Software", name:"Software Engineering", desc:"Engineering discipline behind reliable, scalable applications.", rel:["Advanced Diploma in Full Stack Development"]},
    {key:"Cloud", name:"Cloud Computing", desc:"Scalable infrastructure and managed platforms for modern systems.", rel:["Professional Diploma in Cloud Computing & DevOps"]},
    {key:"Cyber", name:"Cybersecurity", desc:"Defensive security practice across networks, systems and data.", rel:["PGD in Cybersecurity","Advanced Diploma in Cybersecurity"]},
    {key:"Blockchain", name:"Blockchain & Web3", desc:"Distributed ledgers and decentralized application infrastructure.", rel:["PGD in Blockchain & Web3"]},
    {key:"Robotics", name:"Robotics & Automation", desc:"Physical automation, control systems and robotic engineering.", rel:["PGD in Robotics & Automation"]},
    {key:"AR/VR", name:"AR/VR & Extended Reality", desc:"Immersive interaction design across augmented and virtual reality.", rel:["Professional Diploma in AR/VR"]},
    {key:"IoT", name:"Internet of Things", desc:"Connected sensors and embedded systems bridging physical and digital.", rel:["Professional Diploma in IoT & Smart Systems"]},
    {key:"3D", name:"3D Animation & Visualization", desc:"3D modelling and visualization pipelines for media and product design.", rel:["Advanced Diploma in 3D Animation & Visualization"]},
    {key:"Quantum", name:"Quantum Computing", desc:"Foundational quantum algorithms and next-generation computing theory.", rel:["Advanced Diploma in Quantum Computing"]},
    {key:"FinTech", name:"FinTech", desc:"Technology-driven financial infrastructure and digital banking.", rel:["Professional Diploma in AI-Enabled Business & Strategy"]}
  ];
  var svg = document.getElementById('fsm-svg');
  var cx=280, cy=280, r=185;
  var ns = "http://www.w3.org/2000/svg";
  function el(tag, attrs){ var e = document.createElementNS(ns, tag); for(var k in attrs){ e.setAttribute(k, attrs[k]); } return e; }

  NODES.forEach(function(n, i){
    var angle = (Math.PI*2/NODES.length)*i - Math.PI/2;
    n.x = cx + r*Math.cos(angle);
    n.y = cy + r*Math.sin(angle);
  });

  NODES.forEach(function(n){
    svg.appendChild(el('line', {class:'fsm-line', x1:cx, y1:cy, x2:n.x, y2:n.y, 'data-key':n.key}));
  });
  svg.appendChild(el('circle', {class:'', cx:cx, cy:cy, r:52}));
  var centerG = el('g', {class:'fsm-center'});
  centerG.appendChild(el('circle', {cx:cx, cy:cy, r:52}));
  var t1 = el('text', {x:cx, y:cy-4, 'text-anchor':'middle'}); t1.textContent='DIPTI';
  var t2 = el('text', {x:cx, y:cy+12, 'text-anchor':'middle', 'font-size':'9'}); t2.textContent='FUTURE SKILLS';
  centerG.appendChild(t1); centerG.appendChild(t2);
  svg.appendChild(centerG);

  NODES.forEach(function(n){
    var g = el('g', {class:'fsm-node', 'data-key':n.key, tabindex:'0', role:'button'});
    g.appendChild(el('circle', {cx:n.x, cy:n.y, r:34}));
    var tx = el('text', {x:n.x, y:n.y+4, 'text-anchor':'middle'});
    tx.textContent = n.key;
    g.appendChild(tx);
    svg.appendChild(g);
    n._g = g;
  });

  var panel = document.getElementById('fsm-panel');
  function selectNode(key){
    var n = NODES.find(function(x){return x.key===key;});
    if(!n) return;
    document.querySelectorAll('.fsm-node').forEach(function(g){ g.classList.toggle('active', g.dataset.key===key); });
    document.querySelectorAll('.fsm-line').forEach(function(l){ l.classList.toggle('active', l.dataset.key===key); });
    panel.innerHTML = '<span class="eyebrow code mono" style="color:var(--cyan-2)">Node &middot; '+n.key+'</span>'+
      '<h3>'+n.name+'</h3>'+
      '<p>'+n.desc+'</p>'+
      '<div class="rel">'+n.rel.map(function(r){return '<span>'+r+'</span>';}).join('')+'</div>';
  }
  svg.querySelectorAll('.fsm-node').forEach(function(g){
    g.addEventListener('click', function(){ selectNode(g.dataset.key); });
    g.addEventListener('keydown', function(e){ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); selectNode(g.dataset.key); } });
  });
  selectNode('AI');

})();
