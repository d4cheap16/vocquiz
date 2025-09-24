const allBookData = {
    book1: { // "book1" 對應到您主程式中的 BOOK_ID
        units: {
            "L01": {
                "groupA": {
                    "words": ["benefit", "risk", "balance", "challenge", "develop", "skill", "pressure", "source", "instead", "suggest"],
                    "stories": [{
                        "level": "A2",
                        "text": "Starting a new hobby has a **benefit**: it makes you happy. But there is a **risk** too; you might spend too much time on it. You need to find a good **balance**. It can be a **challenge** at first. But you will **develop** a new **skill**. Don't feel **pressure** to be perfect. The main **source** of joy is the process itself. So, **instead** of worrying, just enjoy it. I **suggest** you try something fun today!"
                    }, {
                        "level": "B1",
                        "text": "Every new opportunity offers a significant **benefit**, but it's important to weigh the potential **risk**. Achieving a healthy work-life **balance** is a common **challenge** for many adults. To succeed, you must constantly **develop** at least one professional **skill**. Many students feel immense **pressure** from exams, which can be a major **source** of stress. **Instead** of giving up, you should seek help. I **suggest** that you talk to a counselor about your feelings."
                    }, {
                        "level": "B2",
                        "text": "The primary **benefit** of globalization is economic growth, though it comes with the **risk** of cultural homogenization. Maintaining a delicate **balance** between progress and tradition is a formidable **challenge** for developing nations. To remain competitive, companies must continuously **develop** their employees' **skill** sets. The constant **pressure** to innovate is a significant **source** of anxiety in the tech industry. **Instead** of merely competing, some experts **suggest** that companies should collaborate to foster collective advancement."
                    }, {
                        "level": "C1",
                        "text": "While the immediate **benefit** of the new policy is apparent, the long-term **risk** it poses to ecological stability cannot be understated. The government faces the immense **challenge** of striking a sustainable **balance** between economic imperatives and environmental preservation. To properly address this, it is crucial to **develop** a comprehensive framework that enhances the **skill** of our workforce in green technologies. The political **pressure** from various lobbies is a primary **source** of contention. **Instead** of capitulating to these demands, I **suggest** a more nuanced approach rooted in scientific consensus."
                    }]
                },
                "groupB": {
                    "words": ["familiar", "spread", "disease", "however", "terrible", "several", "scientific", "prove", "thus", "expert"],
                    "stories": [{
                        "level": "A2",
                        "text": "The new student's face was **familiar** to me. Soon, news began to **spread** that he was a famous actor. He was absent because of a **disease**. **However**, he recovered quickly. The weather was **terrible** that day. He missed **several** important classes. He read a **scientific** article to catch up. He wanted to **prove** he was a good student. **Thus**, he studied hard every night. He is now an **expert** in the subject."
                    }, {
                        "level": "B1",
                        "text": "The melody sounded **familiar**, like a song from my childhood. Rumors can **spread** very quickly through social media. The government is working to control the **disease**. **However**, the situation remains serious. I had a **terrible** headache this morning. I have visited **several** doctors for advice. There is no **scientific** evidence to support that claim. The lawyer's job is to **prove** his client's innocence. He didn't study; **thus**, he failed the exam. We consulted an **expert** on ancient history."
                    }, {
                        "level": "B2",
                        "text": "Although the environment was unfamiliar, the customs were surprisingly **familiar**. The goal of the campaign is to **spread** awareness about mental health. Scientists are searching for a cure for the rare **disease**. **However**, despite their efforts, a breakthrough has not yet been made. The earthquake caused **terrible** damage to the city. The project involves **several** complex stages of development. The team conducted a rigorous **scientific** experiment. The data will help to **prove** or disprove their hypothesis. The company violated safety regulations; **thus**, it was fined heavily. She is a world-renowned **expert** in artificial intelligence."
                    }, {
                        "level": "C1",
                        "text": "The defendant's narrative, though compelling, bore a **familiar** ring of fabrication. Misinformation tends to **spread** exponentially in polarized environments. Combating this metaphorical **disease** of falsehood requires a concerted effort. **However**, censorship is a slippery slope that could lead to more **terrible** outcomes. After **several** failed attempts, the team finally gathered enough **scientific** data to **prove** their groundbreaking theory. **Thus**, their findings, once validated by an independent **expert**, will reshape our understanding of physics."
                    }]
                },
                "groupC": {
                    "words": ["actually", "percent", "plenty", "especially", "opinion", "encourage", "accept", "positive", "emotion", "realize"],
                    "stories": [{
                        "level": "A2",
                        "text": "I thought the test was hard, but **actually** it was easy. I got 100 **percent** on it! Now I have **plenty** of time to relax. I am happy, **especially** because I studied a lot. In my **opinion**, studying is important. My parents **encourage** me to do my best. I must **accept** that some subjects are harder. But I try to stay **positive**. School can bring a lot of **emotion**. I **realize** that learning is a long journey."
                    }, {
                        "level": "B1",
                        "text": "He seems quiet, but he is **actually** very talkative. Over 80 **percent** of the students passed the exam. We have **plenty** of food for everyone at the party. I enjoy outdoor activities, **especially** hiking in the mountains. What's your **opinion** on this new policy? Teachers should **encourage** students to ask questions. It's important to **accept** constructive criticism. She has a very **positive** attitude towards life. It's not always easy to control your **emotion**. I didn't **realize** how late it was."
                    }, {
                        "level": "B2",
                        "text": "The project was **actually** more complex than we had anticipated. The company's profits increased by 15 **percent** this quarter. There is **plenty** of evidence to support the theory. The new law will affect everyone, **especially** small business owners. The committee values every member's **opinion**. We aim to **encourage** creativity and innovation in the workplace. He found it difficult to **accept** the fact that he had failed. Maintaining a **positive** mindset is crucial for overcoming obstacles. He expressed his **emotion** through his art. It was only then that she began to **realize** the gravity of the situation."
                    }, {
                        "level": "C1",
                        "text": "The system, while appearing robust, is **actually** quite vulnerable to cyberattacks. A significant **percent** of the population remains skeptical of the official narrative. There is **plenty** of room for interpretation, **especially** concerning the more ambiguous clauses. In my professional **opinion**, we must **encourage** dissenting voices rather than stifle them. To move forward, we must first **accept** the uncomfortable truths revealed by the data. A **positive** feedback loop can be established by acknowledging and rewarding even minor progress. The public's **emotion** is volatile, and I **realize** that clear communication is paramount to prevent widespread panic."
                    }]
                },
                "groupBonus": {
                    "words": ["benefit", "risk", "balance", "challenge", "develop", "skill", "pressure", "source", "instead", "suggest", "familiar", "spread", "disease", "however", "terrible", "several", "scientific", "prove", "thus", "expert", "actually", "percent", "plenty", "especially", "opinion", "encourage", "accept", "positive", "emotion", "realize"],
                    "story": {
                        "level": "C2",
                        "text": "The **benefit** of our interconnected world is undeniable, yet it carries the inherent **risk** of misinformation, a digital **disease** that can **spread** with **terrible** speed. **Actually**, a large **percent** of online content is unverified. To find a **balance** is a great **challenge**, **especially** when political **pressure** is a **source** of manipulation. **However**, in my **opinion**, **instead** of despairing, we must **develop** the **skill** of critical thinking. We have **plenty** of **scientific** tools to **prove** or disprove claims. I **suggest** we **encourage** this mindset and **accept** that it requires effort. A **positive** approach is crucial. After **several** in-depth discussions with an **expert**, I **realize** that managing this digital **emotion** is a key task for our generation; **thus**, we must act decisively."
                    }
                }
            },
            "L02": {
                "groupA": {
                    "words": ["whole", "road", "block", "remind", "memory", "pack", "somewhere", "belong", "real", "letter"],
                    "stories": [{
                        "level": "A2",
                        "text": "I spent the **whole** day cleaning my room. The **road** outside my house is always busy. A big truck came and tried to **block** the street. This song will **remind** me of our happy **memory** together. I need to **pack** my bag for the trip. Let's go **somewhere** quiet. I feel like I **belong** here. Is this story **real** or fake? I received a **letter** from my friend."
                    }, {
                        "level": "B1",
                        "text": "He ate the **whole** pizza by himself. We followed the winding **road** up the mountain. The fallen tree will **block** traffic for hours. Please **remind** me to call my mom tonight. I have a fond **memory** of our vacation last summer. Don't forget to **pack** a warm jacket. I want to travel **somewhere** exotic for my next holiday. After years of moving, she finally found a place where she felt she could **belong**. The movie is based on a **real** story. She wrote a long **letter** explaining her feelings."
                    }, {
                        "level": "B2",
                        "text": "The **whole** team contributed to the project's success. The **road** to recovery will be long and difficult. The government plans to **block** access to unauthorized websites. The scent of rain on dry earth can **remind** many people of their childhood, invoking a powerful **memory**. Before you leave, you should **pack** all your personal belongings. Let's find **somewhere** more private to discuss this matter. He struggled to find a sense of where he could truly **belong**. We need to address the **real** issues instead of getting distracted. The historical **letter** revealed a hidden side of the famous general."
                    }, {
                        "level": "C1",
                        "text": "The prosecution's case hinged on the defendant's inability to account for his whereabouts during the **whole** incident. The metaphorical **road** to justice is often fraught with obstacles designed to **block** progress. This artifact serves to **remind** us of a collective **memory** we have long suppressed. We must **pack** away our preconceptions and venture **somewhere** beyond our intellectual comfort zones. Only then can we find where our arguments truly **belong** in the grand, **real** discourse, much like a long-lost **letter** finding its recipient."
                    }]
                },
                "groupB": {
                    "words": ["apartment", "note", "above", "as", "well", "move", "forward", "perhaps", "someone", "else"],
                    "stories": [{
                        "level": "A2",
                        "text": "I live in a small **apartment**. I left a **note** on the table for you. The bird is flying **above** the trees. She works **as** a teacher. I hope you get **well** soon. Please **move** this box. We need to look **forward**, not back. **Perhaps** we can go tomorrow. Is **someone** at the door? This is not my bag; it must be for someone **else**."
                    }, {
                        "level": "B1",
                        "text": "She's looking for a new **apartment** downtown. The student took careful **note** of the lecture. The helicopter hovered **above** the building. **As** you know, the deadline is next week. He plays the piano very **well**. It's time to **move** on from the past. I'm looking **forward** to the weekend. **Perhaps** the train has been delayed. Can **someone** help me with this? If you can't go, we'll ask someone **else**."
                    }, {
                        "level": "B2",
                        "text": "The rent for this **apartment** is higher than I expected. Of particular **note** is the author's use of symbolism. His performance was well **above** average. **As** the CEO, she has many responsibilities. The plan was executed exceptionally **well**. We must **move** this discussion **forward** to the next agenda item. **Perhaps** a different approach would be more effective. We need **someone** with expertise in this field. This task cannot be delegated to anyone **else**."
                    }, {
                        "level": "C1",
                        "text": "Residing in a cramped **apartment**, the protagonist took meticulous **note** of the sounds emanating from the floor **above**. **As** a musician, she transcribed them onto a score, performing them so **well** that she could finally **move** **forward** with her life. **Perhaps**, she mused, **someone** would finally recognize her talent. Or maybe, it was destined for someone **else**, a future tenant, to decipher her cryptic musical **letter**."
                    }]
                },
                "groupC": {
                    "words": ["besides", "already", "return", "miss", "believe", "though", "even", "half", "probably", "start"],
                    "stories": [{
                        "level": "A2",
                        "text": "**Besides** English, I also speak French. I have **already** finished my homework. When will you **return** the book? I **miss** my family. Do you **believe** in ghosts? I am tired, **though** I slept a lot. He can **even** speak three languages. I ate **half** of the cake. It will **probably** rain tomorrow. Let's **start** the game now."
                    }, {
                        "level": "B1",
                        "text": "**Besides** being a great singer, she is also a talented actress. The train has **already** left the station. Please **return** to your seats. I really **miss** our conversations. I **believe** that everything happens for a reason. **Though** the movie was long, it was very interesting. **Even** a small donation can make a big difference. He spent **half** his life working in that factory. She will **probably** be late for the meeting. The project will **start** next Monday."
                    }, {
                        "level": "B2",
                        "text": "**Besides** the official report, there are several other sources to consider. We have **already** allocated the funds for this project. The company hopes to see a good **return** on its investment. You don't want to **miss** this once-in-a-lifetime opportunity. It's hard to **believe** how much has changed. **Though** he is young, he has a lot of experience. The news was so shocking that **even** his opponents expressed sympathy. More than **half** of the respondents agreed with the proposal. The issue will **probably** be resolved by the end of the week. Let's **start** by reviewing the main points."
                    }, {
                        "level": "C1",
                        "text": "**Besides** the legal ramifications, the ethical implications are staggering. We have **already** seen the precedent for this. In **return** for our silence, they offered a settlement we could not **believe**. I would **miss** the chance to expose them, **though**. **Even** if it meant losing everything, I had to bring this to light. More than **half** the evidence was circumstantial, but it would **probably** be enough to **start** a formal investigation."
                    }]
                },
                "groupBonus": {
                    "words": ["whole", "road", "block", "remind", "memory", "pack", "somewhere", "belong", "real", "letter", "apartment", "note", "above", "as", "well", "move", "forward", "perhaps", "someone", "else", "besides", "already", "return", "miss", "believe", "though", "even", "half", "probably", "start"],
                    "story": {
                        "level": "C2",
                        "text": "The **whole** **road** felt different. I had to **remind** myself this was my **real** home now, this tiny **apartment**. My only **memory** of the past was in a **letter** I kept. I should **probably** **pack** it away **somewhere** safe. A **note** on the door said, 'You **belong** here.' I didn't **believe** it. **Perhaps** it was for **someone** **else**. **Besides**, I **already** knew I couldn't stay. It's time to **move** **forward**, **even** **though** I'll **miss** this place. I need to **return** to my old life, or at least **start** a new one. **As** I looked at the sky **above**, I knew it would be a **block** in my mind for a while, but I could handle it **well**, as **half** of my heart wanted to leave."
                    }
                }
            },
            "L03": {
                "groupA": {
                    "words": ["during", "deep", "while", "brain", "power", "shut", "body", "size", "dark", "form"],
                    "stories": [{
                        "level": "A2",
                        "text": "Please be quiet **during** the movie. The ocean is very **deep**. He fell asleep **while** watching TV. Use your **brain** to solve the puzzle. This car has a lot of **power**. Please **shut** the door. Exercise is good for your **body**. What is your shoe **size**? It's too **dark** to see. Water can exist in solid or liquid **form**."
                    }, {
                        "level": "B1",
                        "text": "**During** the storm, the **power** went out. We took a **deep** breath before diving into the water. **While** I understand your point, I don't agree. The human **brain** is incredibly complex. He had to **shut** down the computer. A healthy mind requires a healthy **body**. The company is growing in **size**. She is afraid of the **dark**. The artist uses clay to **form** his sculptures."
                    }, {
                        "level": "B2",
                        "text": "Several important decisions were made **during** the meeting. The novel offers a **deep** insight into human nature. **While** there are risks involved, the potential rewards are significant. The study explores how the **brain** processes language. The president has the **power** to veto legislation. They had to **shut** the factory due to financial problems. The athlete pushed her **body** to its limits. The sheer **size** of the universe is hard to comprehend. He prefers movies with a **dark** and mysterious theme. A new government will **form** after the election."
                    }, {
                        "level": "C1",
                        "text": "**During** a **deep** sleep cycle, specifically **while** the prefrontal cortex activity lessens, the **brain** consolidates memories. This restorative process requires immense metabolic **power**, which is why the conscious part of the mind must essentially **shut** down. The entire **body** enters a state of reduced activity, irrespective of its **size**. In the quiet **dark**, new neural pathways **form**, cementing the day's learning."
                    }]
                },
                "groupB": {
                    "words": ["dolphin", "half", "sleep", "protect", "danger", "enemy", "attack", "sense", "hear", "sound"],
                    "stories": [{
                        "level": "A2",
                        "text": "A **dolphin** is a smart sea animal. Only **half** of its brain goes to **sleep**. This helps it **protect** itself from **danger**. If an **enemy** comes, the dolphin can escape. It can avoid an **attack**. The dolphin can **sense** movement in the water. It can **hear** every **sound** around it."
                    }, {
                        "level": "B1",
                        "text": "The **dolphin** leaped gracefully out of the water. He was only **half** awake when the alarm rang. Lack of **sleep** can affect your health. The mother bird tried to **protect** her chicks from **danger**. In the story, the hero confronts his main **enemy**. The soldiers prepared for an **attack**. Dogs have a keen **sense** of smell. I can **hear** a strange **sound** coming from the basement."
                    }, {
                        "level": "B2",
                        "text": "Researchers are studying the complex communication of the **dolphin**. He was only **half** listening to the presentation. The experiment investigates the effects of sleep deprivation. The new system is designed to **protect** data from cyber threats. He was unaware of the **danger** that lay ahead. The two nations were once a bitter **enemy**. The surprise **attack** caught them off guard. She has a good **sense** of direction. It's difficult to **hear** with all this background **sound**."
                    }, {
                        "level": "C1",
                        "text": "Unlike humans, the **dolphin** engages in unihemispheric slow-wave **sleep**, where one **half** of its brain remains conscious. This adaptation allows it to continuously **protect** itself from the **danger** of an approaching **enemy** or predator. Should it **sense** an impending **attack**, it can react instantly. It can still **hear** every underwater **sound**, maintaining a state of perpetual vigilance that is fascinating to scientists."
                    }]
                },
                "groupC": {
                    "words": ["another", "way", "animal", "person", "bird", "different", "stay", "rest", "avoid", "list"],
                    "stories": [{
                        "level": "A2",
                        "text": "Can I have **another** cookie? This is the right **way** to do it. A dog is a friendly **animal**. That **person** is my teacher. Look at that beautiful **bird**! My brother and I have **different** hobbies. I will **stay** at home today. You need to get some **rest**. Try to **avoid** making mistakes. I made a shopping **list**."
                    }, {
                        "level": "B1",
                        "text": "Let's try **another** approach to solve this problem. Can you show me the **way** to the station? He is a true **animal** lover. She is a very kind **person**. The early **bird** catches the worm. We have very **different** opinions on this matter. She decided to **stay** in a hotel. The doctor told him to get plenty of **rest**. He took a detour to **avoid** the traffic jam. Please add your name to the **list**."
                    }, {
                        "level": "B2",
                        "text": "The company is opening **another** branch overseas. There must be a more efficient **way** to manage this process. The documentary explores the behavior of a rare **animal**. He is a highly respected **person** in his field. The national **bird** is a symbol of the country. The two cultures are significantly **different**. The law requires you to **stay** within the speed limit. The team took a short **rest** before continuing. The politician tried to **avoid** answering the difficult question. She is at the top of the candidate **list**."
                    }, {
                        "level": "C1",
                        "text": "**Another** fascinating **way** animals sleep involves the frigate **bird**. This **animal**, unlike a **person**, can sleep while flying. This is a very **different** approach compared to how most creatures **rest**. To **stay** safe from predators in the open ocean, it must **avoid** landing for long periods. The **list** of such incredible adaptations in the animal kingdom is extensive, showcasing nature's ingenuity."
                    }]
                },
                "groupBonus": {
                    "words": ["during", "deep", "while", "brain", "power", "shut", "body", "size", "dark", "form", "dolphin", "half", "sleep", "protect", "danger", "enemy", "attack", "sense", "hear", "sound", "another", "way", "animal", "person", "bird", "different", "stay", "rest", "avoid", "list"],
                    "story": {
                        "level": "C2",
                        "text": "**During** a **deep** **sleep**, the human **brain** needs to **shut** down to **rest**. A **dolphin**, however, has a **different** **way**. This marine **animal** keeps **half** its **brain** awake! **While** one part sleeps, the other has the **power** to **sense** **danger**. This helps it **protect** its **body** from an **enemy** **attack**. It can **hear** any suspicious **sound** in the **dark** water. A **person** can't do that. **Another** incredible creature is the frigate **bird**, which can sleep while flying to **avoid** landing. The **list** of these adaptations is long, showcasing how animals of every **size** and **form** **stay** alive."
                    }
                }
            }
        },
        wordDetails: {
            "L01": {
                "benefit": {
                    "pos": "n.",
                    "translation": "好處；益處",
                    "definition": "a helpful or good effect, or something intended to help.",
                    "example": "The discovery of oil brought many benefits to the town.",
                    "example_tw": "石油的發現給小鎮帶來了許多好處。",
                    "family": []
                },
                "risk": {
                    "pos": "n.",
                    "translation": "風險",
                    "definition": "the possibility of something bad happening.",
                    "example": "There's a high risk of another earthquake in this area.",
                    "example_tw": "這個地區再次發生地震的風險很高。",
                    "family": []
                },
                "balance": {
                    "pos": "n.",
                    "translation": "平衡",
                    "definition": "a state where things are of equal weight or importance.",
                    "example": "She tries to keep a balance between her work and her family.",
                    "example_tw": "她試圖在工作和家庭之間保持平衡。",
                    "family": []
                },
                "challenge": {
                    "pos": "n.",
                    "translation": "挑戰",
                    "definition": "something needing great mental or physical effort in order to be done successfully.",
                    "example": "It's a challenge to climb that mountain, but we'll do it.",
                    "example_tw": "爬那座山是個挑戰，但我們會完成它。",
                    "family": ["challenging_adj"]
                },
                "develop": {
                    "pos": "v.",
                    "translation": "發展；培養",
                    "definition": "to (cause something to) grow or change into a more advanced, larger, or stronger form.",
                    "example": "The company is spending $650 million on developing new products.",
                    "example_tw": "該公司正花費6.5億美元開發新產品。",
                    "family": ["development_n"]
                },
                "skill": {
                    "pos": "n.",
                    "translation": "技巧；技能",
                    "definition": "an ability to do an activity or job well, especially because you have practiced it.",
                    "example": "This job requires excellent communication skills.",
                    "example_tw": "這份工作需要出色的溝通技巧。",
                    "family": []
                },
                "pressure": {
                    "pos": "n.",
                    "translation": "壓力",
                    "definition": "the force you produce when you press something.",
                    "example": "He's been under a lot of pressure at work recently.",
                    "example_tw": "他最近工作壓力很大。",
                    "family": []
                },
                "source": {
                    "pos": "n.",
                    "translation": "來源",
                    "definition": "the place something comes from or starts at, or the cause of something.",
                    "example": "The sun is the main source of light for the Earth.",
                    "example_tw": "太陽是地球主要的光源。",
                    "family": []
                },
                "instead": {
                    "pos": "adv.",
                    "translation": "作為替代",
                    "definition": "in place of someone or something else.",
                    "example": "If you don't have butter, you can use margarine instead.",
                    "example_tw": "如果你沒有奶油，可以用人造奶油代替。",
                    "family": []
                },
                "suggest": {
                    "pos": "v.",
                    "translation": "建議",
                    "definition": "to mention an idea, possible plan, or action for other people to consider.",
                    "example": "I suggest that we should go to the park for a picnic.",
                    "example_tw": "我建議我們應該去公園野餐。",
                    "family": ["suggestion_n"]
                },
                "familiar": {
                    "pos": "adj.",
                    "translation": "熟悉的",
                    "definition": "easy to recognize because of being seen, met, heard, etc. before.",
                    "example": "The voice on the phone sounded familiar.",
                    "example_tw": "電話裡的聲音聽起來很熟悉。",
                    "family": []
                },
                "spread": {
                    "pos": "v.",
                    "translation": "散播；傳播",
                    "definition": "to cover or reach a wider or increasing area.",
                    "example": "The fire spread very rapidly because of the strong wind.",
                    "example_tw": "由於風大，火勢蔓延得非常快。",
                    "family": []
                },
                "disease": {
                    "pos": "n.",
                    "translation": "疾病",
                    "definition": "(an) illness of people, animals, plants, etc., caused by infection or a failure of health.",
                    "example": "The first symptom of the disease is a high fever.",
                    "example_tw": "這種疾病的第一個症狀是高燒。",
                    "family": []
                },
                "however": {
                    "pos": "adv.",
                    "translation": "然而；不過",
                    "definition": "despite whatever amount or degree.",
                    "example": "He was feeling very ill. However, he went to work.",
                    "example_tw": "他病得很重。然而，他還是去上班了。",
                    "family": []
                },
                "terrible": {
                    "pos": "adj.",
                    "translation": "糟糕的；可怕的",
                    "definition": "very unpleasant or serious or of low quality.",
                    "example": "The weather was terrible, so we didn't go out.",
                    "example_tw": "天氣很糟糕，所以我們沒有出門。",
                    "family": []
                },
                "several": {
                    "pos": "det.",
                    "translation": "幾個的",
                    "definition": "some; an amount that is not exact but is fewer than many.",
                    "example": "Several of my friends are coming to the party.",
                    "example_tw": "我的幾個朋友要來參加派對。",
                    "family": []
                },
                "scientific": {
                    "pos": "adj.",
                    "translation": "科學的",
                    "definition": "relating to science, or using the organized methods of science.",
                    "example": "We need more scientific research into this disease.",
                    "example_tw": "我們需要對這種疾病進行更多的科學研究。",
                    "family": ["scientist_n"]
                },
                "prove": {
                    "pos": "v.",
                    "translation": "證明",
                    "definition": "to show a particular result after a period of time.",
                    "example": "You have to prove that you are innocent.",
                    "example_tw": "你必須證明你是無辜的。",
                    "family": ["proof_n"]
                },
                "thus": {
                    "pos": "adv.",
                    "translation": "因此",
                    "definition": "with this result.",
                    "example": "He is the eldest son and thus, he will inherit the estate.",
                    "example_tw": "他是長子，因此，他將繼承這筆遺產。",
                    "family": []
                },
                "expert": {
                    "pos": "n.",
                    "translation": "專家",
                    "definition": "a person with a high level of knowledge or skill relating to a particular subject or activity.",
                    "example": "She is a world expert on butterflies.",
                    "example_tw": "她是世界級的蝴蝶專家。",
                    "family": []
                },
                "actually": {
                    "pos": "adv.",
                    "translation": "實際上",
                    "definition": "in fact or really.",
                    "example": "I thought he was joking, but he was actually serious.",
                    "example_tw": "我以為他在開玩笑，但他實際上是認真的。",
                    "family": ["actual_adj"]
                },
                "percent": {
                    "pos": "n.",
                    "translation": "百分之一",
                    "definition": "for or out of every 100, shown by the symbol %.",
                    "example": "Only 40 percent of the students voted in the election.",
                    "example_tw": "只有百分之四十的學生在選舉中投票。",
                    "family": ["percentage_n"]
                },
                "plenty": {
                    "pos": "pron.",
                    "translation": "大量；充足",
                    "definition": "(more than) enough.",
                    "example": "Don't worry, we have plenty of time.",
                    "example_tw": "別擔心，我們有充足的時間。",
                    "family": []
                },
                "especially": {
                    "pos": "adv.",
                    "translation": "尤其",
                    "definition": "very much; more than usual or more than other people or things.",
                    "example": "I love ice cream, especially chocolate flavor.",
                    "example_tw": "我喜歡冰淇淋，尤其是巧克力口味的。",
                    "family": []
                },
                "opinion": {
                    "pos": "n.",
                    "translation": "意見；看法",
                    "definition": "a thought or belief about something or someone.",
                    "example": "In my opinion, we should wait before making a decision.",
                    "example_tw": "在我看來，我們應該等一等再做決定。",
                    "family": []
                },
                "encourage": {
                    "pos": "v.",
                    "translation": "鼓勵",
                    "definition": "to make someone more likely to do something, or to make something more likely to happen.",
                    "example": "My parents always encourage me to follow my dreams.",
                    "example_tw": "我的父母總是鼓勵我追隨我的夢想。",
                    "family": ["encouragement_n"]
                },
                "accept": {
                    "pos": "v.",
                    "translation": "接受",
                    "definition": "to agree to take something.",
                    "example": "Please accept my apology.",
                    "example_tw": "請接受我的道歉。",
                    "family": ["acceptable_adj"]
                },
                "positive": {
                    "pos": "adj.",
                    "translation": "正面的；積極的",
                    "definition": "full of hope and confidence, or giving cause for hope and confidence.",
                    "example": "She has a positive attitude towards her work.",
                    "example_tw": "她對工作抱持著積極的態度。",
                    "family": []
                },
                "emotion": {
                    "pos": "n.",
                    "translation": "情緒",
                    "definition": "a strong feeling such as love or anger, or strong feelings in general.",
                    "example": "He finds it hard to express his emotions.",
                    "example_tw": "他覺得很難表達自己的情緒。",
                    "family": ["emotional_adj"]
                },
                "realize": {
                    "pos": "v.",
                    "translation": "意識到；了解到",
                    "definition": "to understand a situation, sometimes suddenly.",
                    "example": "I suddenly realized I had left my keys in the car.",
                    "example_tw": "我突然意識到我把鑰匙忘在車裡了。",
                    "family": ["realization_n"]
                },
                "challenging_adj": {
                    "pos": "adj.",
                    "translation": "有挑戰性的",
                    "definition": "difficult, in a way that tests your ability or determination.",
                    "example": "This is a challenging time for our country.",
                    "example_tw": "對我們國家來說，這是一個充滿挑戰的時期。"
                },
                "development_n": {
                    "pos": "n.",
                    "translation": "發展",
                    "definition": "the process in which someone or something grows or changes and becomes more advanced.",
                    "example": "The development of new technology is very fast.",
                    "example_tw": "新科技的發展非常迅速。"
                },
                "suggestion_n": {
                    "pos": "n.",
                    "translation": "建議",
                    "definition": "an idea, plan, or action that is suggested or the act of suggesting it.",
                    "example": "Do you have any suggestions for the party?",
                    "example_tw": "你對這個派對有什麼建議嗎？"
                },
                "scientist_n": {
                    "pos": "n.",
                    "translation": "科學家",
                    "definition": "an expert who studies or works in one of the sciences.",
                    "example": "The scientist is doing an experiment in the lab.",
                    "example_tw": "那位科學家正在實驗室裡做實驗。"
                },
                "proof_n": {
                    "pos": "n.",
                    "translation": "證據",
                    "definition": "a fact or piece of information that shows that something exists or is true.",
                    "example": "You need proof of your identity to open a bank account.",
                    "example_tw": "你需要身分證明才能開立銀行帳戶。"
                },
                "actual_adj": {
                    "pos": "adj.",
                    "translation": "實際的",
                    "definition": "real; existing in fact.",
                    "example": "The actual cost was higher than we expected.",
                    "example_tw": "實際成本比我們預期的要高。"
                },
                "percentage_n": {
                    "pos": "n.",
                    "translation": "百分比",
                    "definition": "an amount of something, expressed as a number out of 100.",
                    "example": "What percentage of the students are girls?",
                    "example_tw": "女學生占學生總數的百分比是多少？"
                },
                "encouragement_n": {
                    "pos": "n.",
                    "translation": "鼓勵",
                    "definition": "words or behaviour that give someone confidence to do something.",
                    "example": "With a little encouragement, she might agree.",
                    "example_tw": "稍加鼓勵，她也許會同意的。"
                },
                "acceptable_adj": {
                    "pos": "adj.",
                    "translation": "可接受的",
                    "definition": "satisfactory and able to be agreed to or approved of.",
                    "example": "This is not an acceptable solution to the problem.",
                    "example_tw": "這不是一個可以接受的解決方案。"
                },
                "emotional_adj": {
                    "pos": "adj.",
                    "translation": "情緒的",
                    "definition": "relating to the emotions.",
                    "example": "He's a very emotional person.",
                    "example_tw": "他是個非常情緒化的人。"
                },
                "realization_n": {
                    "pos": "n.",
                    "translation": "意識到；實現",
                    "definition": "the fact or moment of starting to understand something.",
                    "example": "The realization of his dream was a great moment for him.",
                    "example_tw": "他夢想的實現對他來說是一個偉大的時刻。"
                }
            },
            "L02": {
                "whole": {
                    "pos": "adj.",
                    "translation": "整個的",
                    "definition": "complete or not divided.",
                    "example": "I spent the whole day reading.",
                    "example_tw": "我花了一整天讀書。",
                    "family": []
                },
                "road": {
                    "pos": "n.",
                    "translation": "路",
                    "definition": "a long, hard surface built for vehicles to travel along.",
                    "example": "Be careful when you cross the road.",
                    "example_tw": "過馬路時要小心。",
                    "family": []
                },
                "block": {
                    "pos": "v.",
                    "translation": "阻擋",
                    "definition": "to stop something from happening or moving.",
                    "example": "A fallen tree is blocking the road.",
                    "example_tw": "一棵倒下的樹擋住了路。",
                    "family": []
                },
                "remind": {
                    "pos": "v.",
                    "translation": "提醒",
                    "definition": "to make someone remember something, or remember to do something.",
                    "example": "Please remind me to buy milk.",
                    "example_tw": "請提醒我買牛奶。",
                    "family": ["reminder_n"]
                },
                "memory": {
                    "pos": "n.",
                    "translation": "記憶；回憶",
                    "definition": "the ability to
}