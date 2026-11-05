// Static game data: incidents (K), equipment (EQ), coworkers (EM), scenarios (SC), upgrades (UP), state labels (ST)
const K={jam:{t:'Printer jam',i:'🖨️',eq:'pr',sev:2,w:3,s:[['Clear it yourself',0,15,.6,0],['IT repairs it',0,20,.9,1],['Buy a new printer',120,4,1,0]]},
net:{t:'Internet is down',i:'📡',eq:'net',sev:3,w:2,s:[['Reboot the router',0,10,.55,0],['IT diagnoses it',0,25,.9,1],['Call the ISP',40,30,.85,0]]},
pow:{t:'Power outage',i:'⚡',eq:'pow',sev:4,w:1,s:[['Flip the breaker',0,10,.5,0],['IT rewires it',0,30,.9,1],['Rent a generator',80,5,1,0]]},
cof:{t:'Coffee floods the break room',i:'☕',eq:'cof',sev:2,w:2,s:[['Mop it up',0,12,.8,0],['Hire cleaners',50,5,1,0]]},
mail:{t:'Wrong document emailed to everyone',i:'📧',sev:2,w:2,s:[['Recall the email',0,10,.7,1],['Apologize to everyone',0,15,.5,0]]},
upd:{t:'Suspicious software update',i:'💾',eq:'net',sev:3,w:1,pre:s=>s.t>60,s:[['Roll it back',0,20,.8,1],['Reinstall everything',60,35,.95,0]]},
insp:{t:'Executive inspection',i:'👔',sev:3,w:1,pre:s=>s.t>120,s:[['Tidy up fast',0,15,.7,0],['Stall with small talk',0,10,.5,0],['Bring pastries',30,5,.8,0]]},
drill:{t:'Fire drill',i:'🧯',sev:2,w:1,pre:s=>s.t>90,s:[['Evacuate quickly',0,12,1,0],['Pretend to evacuate',0,6,.5,0]]},
fight:{t:'Departments fight over supplies',i:'🗯️',sev:2,w:1,s:[['Call a mediation',0,15,.7,0],['Buy more supplies',35,5,.9,0]]}};
const EQ={pr:['Printer','🖨️'],net:['Network','📡'],pow:['Power','⚡'],cof:['Coffee machine','☕']};
const EM=[['ov','Olive','Overachiever','🤓',1.4,.05,.2,.1,0],['pr','Pax','Office Prankster','😜',.8,.3,.1,.6,0],['lt','Lena','Always-Late Employee','🥱',.9,.2,.3,.3,70],['in','Ivy','Panicked Intern','😰',.6,.35,.9,.3,0],['mg','Mr. Gruff','Unhelpful Manager','😠',.3,.1,.2,.2,0],['it','Theo','IT Technician','🧑‍💻',1,.1,.2,.2,0],['go','Gail','Office Gossip','🤭',.9,.2,.3,.9,0]];
const SC=[['The First Day','Gentle start. Learn where the printer hides.',30,.6,{}],['The Printer Apocalypse','Everything jams. Everything.',40,1,{jam:4}],['Deadline Friday','Huge quota, no mercy.',60,1,{}],['The Office Relocation','Boxes everywhere, equipment wears out fast.',45,1,{},2],['The Executive Visit','The big bosses walk in this afternoon.',45,1,{insp:4}],['Company-Wide IT Failure','Network and power are cursed.',50,1.1,{net:3,pow:3,upd:3}],['The Final Performance Review','All of it, all day.',70,1.4,{jam:1.5,net:1.5,mail:1.5}]];
const UP={sur:['Surge protector','Power incidents less likely',60],pro:['Industrial printer','Printer wears out slower',80],esp:['Espresso machine','Coffee restores more energy',70],mop:['Mop bucket station','Office stays clean longer',50],chair:['Ergonomic chairs','Stress builds slower',90]};
const ST={work:'typing furiously',fix:'wrestling a device',coffee:'hunting caffeine',chat:'gossiping loudly',panic:'screaming quietly',away:'stuck in traffic',meet:'pretending to listen',drill:'evacuating dramatically'};
