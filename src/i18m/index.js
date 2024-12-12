
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home:"Home",
        historical:"Historical Sites",
        museum:"Museum",
        event:"Events",
        arts:"Arts",
        about:"About",
        cultural_heritage: "Cultural Heritage",
        National_Museum_Title: "National Museum of Cambodia",
        Tuol_Sleng_Title:"Tuol Sleng Genocide museum",
        Cheoung_Ek_Title:"Cheoung Ek Genocidal Center",
        SOSORO_Museum_Title:"SOSORO Museum",
        Return: "Return",
        More:"More",
        Visit_One_Title:"Visit One Of Our Destination Now",
        Visit_One:"Cambodia, a country rich in history and tradition, is home to a diverse cultural heritage that spans over a thousand years. The nation’s heritage reflects its ancient kingdoms, deep spiritual roots, and the lasting influence of the Khmer Empire, all of which contribute to the unique identity of modern-day Cambodia. From its iconic architecture to its art, dance, music, and cuisine, Cambodia’s cultural heritage offers a window into the soul of a nation that has endured both triumph and tragedy. translate to khmer.",
        Museum_Title_H: "Museum of Cambodia",
        Museum_H:"A museum is an institution dedicated to preserving, collecting, and exhibiting artifacts and objects of historical, cultural, artistic, or scientific significance.It serves as a repository for human history, allowing societies to understand their past and share their heritage with future generations.Museums often display objects like art pieces, archaeological findings, natural history specimens, or technological innovations.They provide educational opportunities, offering visitors insights into diverse subjects through exhibitions, guided tours, and interactive experiences.",
        Welcome:"Welcome to Museum",
        National_Museum: "The National Museum of Cambodia is located on Street 13 in central Phnom Penh, next to the Royal Palace. The visitor’s entrance to the compound and the admissions ticket booth are at the corner of Streets 13 and 178.",
        Tuol_Sleng:"Tuol Sleng Genocide Museum is the memorial site of the S-21 interrogation and detention center of the Khmer Rouge regime. Located in the heart of Phnom Penh, it preserves evidence of a tragic period in Cambodian history with the",
        Cheoung_Ek:"Choeung Ek is a former orchard in Dangkao, Phnom Penh, Cambodia, that was used as a Killing Field between 1975 and 1979 by the Khmer Rouge in perpetrating the Cambodian genocide. Situated about 17 kilometres south of the city centre, it was attached to the Tuol Sleng detention centre.",
        SOSORO_Musuem:"The SOSORO Museum is located in the heart of Phnom Penh, the capital city of Cambodia. Its protectorate style building was the former town hall residence in 1908, Phnom Penh municipality in 1920, and has been the Preah Srey Içanavarman Museum of Economy and Money since 2012.",
        DetailNM:"The National Museum of Cambodia houses one of the world's greatest collections of Khmer cultural material including sculpture, ceramics and ethnographic objects from the prehistoric, pre-Angkorian, Angkorian and post-Angkorian periods. The Museum promotes awareness, understanding and appreciation of Cambodia's heritage through the presentation, conservation, safekeeping, interpretation and acquisition of Cambodian cultural material. It aims to educate and inspire its visitors. The main activities of the National Museum of Cambodia include exhibiting, safeguarding and promoting understanding of Cambodia’s cultural and artistic treasures. Keeping objects safe and working to ensure the repatriation of pieces stolen from Cambodia are important aspects of the museum’s work, particularly as looting and illicit export of cultural material are a continuing concern. In addition, the Museum strives to engage its visitors through its exhibitions and to fulfil its role as an integral part of the community. The Museum believes that Cambodia’s cultural heritage is of great value and can provide a source of pride and identity to the Cambodian people who have lost so much in recent decades. The availability of multilingual Museum tour guides and Publications, as well as the Museum’s public library, all serve to increase the accessibility of the collection both for local and international visitors. Under the auspices of the Cambodian Department of Museums, the Museum has responsibility not only for its own collection, staff and premises but also to support and oversee all other museums in Cambodia. Outside of Cambodia, the Museum has an active policy of lending objects from its collection for major international exhibitions. This practice was in place before Cambodia’s recent decades of unrest and was reinstituted in the 1990s, starting with an exhibition held at the National Gallery of Australia in 1992. Subsequent exhibitions have been held in France, the USA, Japan, South Korea and Germany. The exhibitions to Australia and France have resulted in significant professional and structural assistance to the Museum from the governments of those countries and it is hoped that international exhibitions will continue to attract such support.",
        DetailTS:"Tuol Sleng Genocide Museum is the memorial site of “Security Office 21” (S-21) of Democratic Kampuchea (also known as the Khmer Rouge regime) and located in what was then the abandoned city of Phnom Penh, whose citizens had been evacuated on 17. April 1975. S-21 served as the central hub of a vast prison system throughout the country and was used throughout the period as a secret facility for the detention, interrogation, torture and extermination of those deemed “political enemies” of the regime. Due to a policy of guilt-by-association, at times whole families were detained at the center. Very few inmates were released out of the prison during the years 1975 and 1979. Only 12 former inmates survived the opening of S-21 when Phnom Penh was liberated. Four of them were children. Approximately 1,720 Khmer Rouge actors worked in and for S-21. Several hundred of them were general workers, including people who grew food for the prison. The rest formed the internal workforce, including administration, guards and interrogators.",
        DetailCE:"The three crime sites (KR prison M-13/ KR “Security Office S-21”/ the Execution Site of S-21 “Choeung Ek”) are strongly linked to each other. In M-13 the later head of S-21, Kaing Guek Ieu, known as Duch, tested methods of interrogation and torture, before he later practiced and further developed them at S-21. After many prisoners were initially killed at S-21, the site Choeung Ek outside of the city was later chosen as a more appropriate site for mass execution. The vast majority of more than 18.000 prisoners of S-21 were killed at Choeung Ek. As it has been possible until today to safeguard all three sites, they can represent together an escalation of violence, which can help to understand, how happenings like at Choeung Ek were possible. All three sites should be seen together as a single sequence of serial memorial sites for remembering and historical learning. Together they can represent with high authenticity and integrity a chronological chain of extreme mass violence. M-13 is one of the early prisons which the Khmer Rouge established before they gained control over the entire country in April 1975. Although there were other such prisons around the country, this appears to be the only one that has been identified and converted into a site of remembrance and learning. Although M-13 moved three times in the area, this site in Prei Chrao Village, was its location for the longest period. Duch, the head of M-13, moved to Phnom Penh and was later appointed as head of S-21 (known today as TSGM), and it is unknown whether M-13 continued to be operational 1975-1979. The number of victims of M-13 is unknown too. However, in January 1979 it was abandoned by the retreating Khmer Rouge and since that date was not used anymore and left empty. While nature gradually covered over the most of the former above-ground traces during the past 40 years, no agriculture activities were undertaken here to destroy the underground traces. Furthermore, knowledge about M-13 is still vivid in the surrounding villages.",
        DetailSM:"SOSORO has been designed to provide a unique perspective on Cambodia’s history and to offer a sharper grasp on the constant interaction between money, economics and politics through history. The SOSORO Museum is located in the heart of Phnom Penh, the capital city of Cambodia. Its protectorate style building was the former town hall residence in 1908, Phnom Penh municipality in 1920, and has been the Preah Srey Içanavarman Museum of Economy and Money since 2012. The building had fallen into a very bad state before it was made available to house the SOSORO Museum. It has been decided to retain all the features that could be preserved in order to display monetary troves and artifacts since the Funan era.",
        about_us_p1: "Cambodia is a country located in the southern part of the Indochina Peninsula in Southeast Asia. Cambodia has a total area of ​​181,035 square kilometers, bordering Thailand to the west and northwest, Laos to the northeast, Vietnam to the east, and the Gulf of Thailand to the southwest. The capital and largest city is Phnom Penh.",
        about_us_p2: "With a population of over 16 million, Cambodia ranks 72nd in the world, 27th in Asia, and 7th in Southeast Asia. Nearly half of the population is concentrated in the lowlands, which make up about 14% of the total area. The official religion is Theravada Buddhism, practiced by about 90% of the population. Minorities in the country include the Vietnamese, Chinese, Cham, and 30 other ethnic groups. The capital and largest city is Phnom Penh, which is the political, economic, and cultural center of Cambodia. Cambodia is a unitary state under a constitutional monarchy and a democratic parliamentary system, with King Norodom Sihamoni, elected by the Royal Council, as king and head of state. The head of government is Prime Minister Hun Sen, the longest-serving leader in Southeast Asia, who has led Cambodia for over 30 years. The leader of the opposition movement and the most popular in Cambodian society is Sam Rainsy, who was a member of parliament in the first term in 1993.",
    },
    khm: {
        home:"ទំព័រដើម",
        historical:"ទីតាំងប្រវត្តិសាស្ត្រ",
        museum:"សារមន្ទីរ",
        event:"ព្រឹត្តិការណ៍វប្បធម៌",
        arts:"សិល្បៈ",
        about:"អំពីយើង",
        cultural_heritage: "បេតិកភណ្ឌវប្បធម៌",
        National_Museum_Title: "សារមន្ទីជាតិកម្ពុជា",
        Tuol_Sleng_Title:"សារមន្ទីរឧក្រិដ្ឋកម្មប្រល័យពូជសាសន៍ទួលស្លែង",
        Cheoung_Ek_Title:"មជ្ឈមណ្ឌលប្រល័យពូជសាសន៍ជើងឯក",
        SOSORO_Museum_Title:"សារមន្ទីរព្រះស្រីឦសានវរ្ម័ន",
        Return: "ត្រឡប់ក្រោយ",
        More:"ព័ត៌មានបន្ថែម",
        Welcome:"សារមន្ទីរសូមស្វាគមន៍",
        Museum_Title_H: "សារមន្ទីរក្នុងប្រទេសកម្ពុជា",
        Visit_One_Title:"សូមចូលទៅទស្សនាតំបន់ដ៏អស្ចារ្យរបស់យើងឥឡូវនេះ!",
        Visit_One:"កម្ពុជា ជាប្រទេសដែលមានប្រវត្តិសាស្ត្រ និងប្រពៃណីដ៏សម្បូរបែប ស្ថិតនៅក្នុងតំបន់ដែលមានមរតកវប្បធម៌ចម្រុះ ដែលមានប្រវត្តិជាងមួយពាន់ឆ្នាំ។មរតកវប្បធម៌របស់ជាតិនេះ បង្ហាញពីអាណាចក្រចាស់ៗ ជំនឿសាសនាដ៏ជ្រាលជ្រៅ និងឥទ្ធិពលដ៏វែងឆ្ងាយរបស់អាណាចក្រខ្មែរ ដែលទាំងអស់នេះបានរួមបង្កើតអត្តសញ្ញាណដ៏ទាក់ទាញរបស់កម្ពុជាសម័យទំនើប។ចាប់ពីស្ថាបត្យកម្មដ៏ល្បីល្បាញរបស់ខ្លួន រហូតដល់សិល្បៈ របាំ តន្ត្រី និងម្ហូបអាហារ មរតកវប្បធម៌របស់កម្ពុជាបានបង្ហាញពីខ្លឹមសារដ៏លំអិតនៃស្មារតីរបស់ប្រទេសមួយ ដែលបានឆ្លងកាត់ទាំងជ័យជំនះ និងការលំបាក។",
        Museum_H:"សារមន្ទីរ​គឺជា​ស្ថាប័ន​មួយ​ដែលមានបំណងថែរក្សា ប្រមូលសម្រង់ និងបង្ហាញវត្ថុបុរាណ និងវត្ថុផ្សេងៗដែលមានសារៈសំខាន់ក្នុងប្រវត្តិសាស្ត្រ វប្បធម៌ សិល្បៈ ឬវិទ្យាសាស្រ្ត។វាទុកដាក់ឯកសារសម្រាប់ប្រវត្តិសាស្ត្រមនុស្ស ដែលអាចឲ្យសង្គមយល់ដឹងអំពីអតីតកាល និងចែករំលែកមរតកវប្បធម៌ទៅជំនាន់ក្រោយ។សារមន្ទីរជាទូទៅបង្ហាញវត្ថុដូចជាស្នាដៃសិល្បៈ សាកសពបុរាណ សាកសពធម្មជាតិ ឬចំណាំវិទ្យាសាស្ត្រដែលទាក់ទងនឹងបច្ចេកវិទ្យា។សារមន្ទីរផ្តល់ជាការសិក្សាបែបអប់រំនានា ដោយផ្តល់ឱកាសឲ្យភ្ញៀវទស្សនា រៀនដឹងពីប្រធានបទផ្សេងៗតាមរយៈការតាំងពិព័រណ៍ ដំណើរជួយណែនាំ និងការពិសោធន៍ប្រើប្រាស់អន្តរកម្ម។",
        National_Museum: "សារមន្ទីរជាតិកម្ពុជា មានទីតាំងស្ថិតនៅផ្លូវលេខ១៣ កណ្តាលរាជធានីភ្នំពេញ នៃប្រទេសកម្ពុជា ជាប់ព្រះបរមរាជវាំង។ ភ្ញៀវទេសចរអាចចូលទៅកាន់បរិវេណ និងកន្លែងលក់សំបុត្រចូលទស្សនា គឺនៅកាច់ជ្រុងផ្លូវលេខ១៣ និង១៧៨។",
        Tuol_Sleng:"សារមន្ទីរឧក្រិដ្ឋកម្មប្រល័យពូជសាសន៍ទួលស្លែង គឺជាកន្លែងចងចាំនៃមន្ទីរឃុំឃាំង ស-២១ នៃរបបខ្មែរក្រហម។ មានទីតាំងនៅចំកណ្តាលទីក្រុងភ្នំពេញ វារក្សានូវភស្តុតាងនៃសម័យសោកនាដកម្មក្នុងប្រវត្តិសាស្ត្រខ្មែរ។",
        Cheoung_Ek:"ជើងឯក គឺជាអតីតចម្ការមួយនៅខណ្ឌដង្កោ រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា ដែលត្រូវបានប្រើជាវាលពិឃាតកំឡុងឆ្នាំ ១៩៧៥-៧៩ ដោយខ្មែរក្រហមក្នុងការប្រព្រឹត្តអំពើប្រល័យពូជសាសន៍កម្ពុជា។ ស្ថិត​នៅ​ចម្ងាយ​ប្រហែល ១៧គីឡូម៉ែត្រ ​ភាគ​ខាង​ត្បូង​កណ្តាល​ក្រុង វា​ជាប់​នឹង​មណ្ឌល​ឃុំ​ខ្លួន​ទួលស្លែង។",
        SOSORO_Musuem:"សារមន្ទីព្រះស្រីឦសានវរ្ម័ន មានទីតាំងនៅចំកណ្តាលរាជធានីភ្នំពេញ នៃប្រទេសកម្ពុជា។ អគារ​រចនាបទ​អាណាព្យាបាល​របស់​វា​ជា​អតីត​លំនៅឋាន​សាលាក្រុង​ឆ្នាំ​១៩០៨ សាលា​រាជធានី​ភ្នំពេញ​ក្នុង​ឆ្នាំ​១៩២០ និង​ជា​សារមន្ទីរ​សេដ្ឋកិច្ច​និង​លុយ​របស់​ព្រះស្រី​ឥសាន​វរ្ម័ន​តាំងពី​ឆ្នាំ​២០១២​មក​។",
        DetailNM:"សារមន្ទីជាតិនៃកម្ពុជាមានកន្លែងប្រមូលផ្តុំនូវវត្ថុវប្បធម៌ខ្មែរដ៏អស្ចារ្យបំផុតមួយក្នុងពិភពលោក រួមមានចម្លាក់ សេរ៉ាមិច និងវត្ថុជនជាតិភាគតិចពីសម័យបុរេប្រវត្តិ បុរេអង្គរ អង្គរ និងក្រោយអង្គរ។ សារមន្ទីរលើកកម្ពស់ការយល់ដឹង ការយល់ដឹង និងការឱ្យតម្លៃនៃបេតិកភណ្ឌរបស់កម្ពុជា តាមរយៈការបង្ហាញ ការអភិរក្ស ការរក្សាសុវត្ថិភាព ការបកស្រាយ និងការទទួលបានសម្ភារៈវប្បធម៌កម្ពុជា។ វាមានគោលបំណងអប់រំ និងបំផុសគំនិតអ្នកទស្សនារបស់ខ្លួន។ សកម្មភាពសំខាន់ៗរបស់សារមន្ទីរជាតិកម្ពុជា រួមមានការតាំងពិពណ៌ ការការពារ និងការលើកកម្ពស់ការយល់ដឹងអំពីសម្បត្តិវប្បធម៌ និងសិល្បៈរបស់កម្ពុជា។ ការរក្សាវត្ថុមាន សុវត្ថិភាពនិងការងារដើម្បីធានាការធ្វើមាតុភូមិនិវត្តន៍នៃបំណែកដែលលួចពីប្រទេសកម្ពុជាគឺជាទិដ្ឋភាពសំខាន់នៃការងាររបស់សារមន្ទីរ ជាពិសេសការលួច និងការនាំចេញសម្ភារៈវប្បធម៌ខុសច្បាប់គឺជា កង្វល់បន្ត។ លើសពីនេះ សារមន្ទីរខិតខំទាក់ទាញអ្នកទស្សនាតាមរយៈការតាំងពិពណ៌ និងបំពេញតួនាទីរបស់ខ្លួនជាផ្នែកសំខាន់មួយនៃសហគមន៍។ សារមន្ទីរជឿជាក់ថាបេតិកភណ្ឌវប្បធម៌របស់កម្ពុជាមានតម្លៃយ៉ាងធំធេង ហើយអាចផ្តល់ជាប្រភពនៃមោទនភាព និងអត្តសញ្ញាណដល់ប្រជាជនកម្ពុជាដែលបានបាត់បង់យ៉ាងច្រើនក្នុងប៉ុន្មានទសវត្សរ៍ថ្មីៗនេះ។ ភាពអាចរកបាននៃមគ្គុទ្ទេសក៍ទេសចរណ៍សារមន្ទីរពហុភាសា និងការបោះពុម្ពផ្សាយ ក៏ដូចជាបណ្ណាល័យសាធារណៈរបស់សារមន្ទី ទាំងអស់បម្រើដើម្បីបង្កើនភាពងាយស្រួលនៃការប្រមូលទាំងសម្រាប់ភ្ញៀវទេសចរក្នុងស្រុក និងអន្តរជាតិ។ក្រោមការឧបត្ថម្ភរបស់នាយកដ្ឋានសារមន្ទីកម្ពុជា សារមន្ទីរមានទំនួលខុសត្រូវមិនត្រឹមតែសម្រាប់ការប្រមូលផ្ដុំ បុគ្គលិក និងបរិវេណរបស់ខ្លួនប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងជួយគាំទ្រ និងត្រួតពិនិត្យសារមន្ទីរផ្សេងទៀតទាំងអស់នៅក្នុងប្រទេសកម្ពុជាផងដែរ។ នៅខាងក្រៅប្រទេសកម្ពុជា សារមន្ទីរមានគោលនយោបាយសកម្មក្នុងការខ្ចីវត្ថុពីការប្រមូលរបស់ខ្លួនសម្រាប់ការតាំងពិពណ៌អន្តរជាតិធំៗ។ ការអនុវត្តនេះគឺធ្វើឡើងមុនពេលកម្ពុជាមានចលាចលជាច្រើនទស្សវត្សចុងក្រោយនេះ ហើយត្រូវបានបង្កើតឡើងវិញក្នុងទស្សវត្សរ៍ឆ្នាំ 1990 ដោយចាប់ផ្តើមជាមួយនឹងការតាំងពិពណ៌ដែលធ្វើឡើងនៅវិចិត្រសាលជាតិនៃប្រទេសអូស្ត្រាលីក្នុងឆ្នាំ 1992។ ការតាំងពិព័រណ៍ជាបន្តបន្ទាប់បានធ្វើឡើងនៅប្រទេសបារាំង សហរដ្ឋអាមេរិក ជប៉ុន កូរ៉េខាងត្បូង និងអាល្លឺម៉ង់។ ការតាំងពិព័រណ៍ទៅកាន់ប្រទេសអូស្ត្រាលី និងបារាំងបាននាំមកនូវជំនួយផ្នែកវិជ្ជាជីវៈ និងរចនាសម្ព័ន្ធដ៏សំខាន់ដល់សារមន្ទីរពីរដ្ឋាភិបាលនៃប្រទេសទាំងនោះ ហើយគេសង្ឃឹមថា ពិព័រណ៍អន្តរជាតិនឹងបន្តទាក់ទាញការគាំទ្របែបនេះ។",
        DetailTS:"សារមន្ទីរឧក្រិដ្ឋកម្មប្រល័យពូជសាសន៍ទួលស្លែង គឺជាកន្លែងរំលឹកនៃ ការិយាល័យសន្តិសុខ ២១ (ស-២១) នៃរបបកម្ពុជាប្រជាធិបតេយ្យ (ត្រូវបានគេស្គាល់ថាជារបបខ្មែរក្រហម) ហើយមានទីតាំងនៅទីក្រុងដែលគេបោះបង់ចោលនៃទីក្រុងភ្នំពេញ ដែលប្រជាពលរដ្ឋត្រូវបានជម្លៀសចេញនៅថ្ងៃ ១៧ មេសា ១៩៧៥។ ស-២១ បានបម្រើការជាមជ្ឈមណ្ឌលកណ្តាលនៃប្រព័ន្ធពន្ធនាគារដ៏ធំនៅទូទាំងប្រទេស ហើយត្រូវបានប្រើប្រាស់ពេញមួយរយៈពេលជាកន្លែងសម្ងាត់សម្រាប់ការឃុំខ្លួន ការសួរចម្លើយ ការធ្វើទារុណកម្ម និងការសម្លាប់ចោលអ្នកដែលចាត់ទុកថាជា “សត្រូវនយោបាយ” នៃរបបនេះ។ ដោយ​សារ​តែ​មាន​គោល​នយោបាយ​នៃ​ការ​រួម​ភេទ​ដោយ​មាន​កំហុស ជួន​កាល​គ្រួសារ​ទាំង​មូល​ត្រូវ​បាន​ឃុំ​ខ្លួន​នៅ​មណ្ឌល។ អ្នកទោសតិចតួចណាស់ដែលត្រូវបានដោះលែងពីពន្ធនាគារកំឡុងឆ្នាំ 1975 និង 1979 ។ មានតែអតីតអ្នកទោសចំនួន 12 នាក់ប៉ុណ្ណោះដែលបានរួចរស់ជីវិតពីការបើកស-21 នៅពេលដែលទីក្រុងភ្នំពេញត្រូវបានរំដោះ។ ពួកគេបួននាក់ជាកុមារ។ តួ​អង្គ​ខ្មែរ​ក្រហម​ប្រមាណ ១៧២០ នាក់​បាន​ធ្វើ​ការ​នៅ​មន្ទីរ​ស-២១។ ពួកគេ​ជាច្រើន​រយនាក់​ជា​កម្មករ​ទូទៅ រួម​ទាំង​អ្នក​ដែល​ដាំ​អាហារ​សម្រាប់​ពន្ធនាគារ។ នៅសល់បង្កើតកម្លាំងការងារផ្ទៃក្នុង រួមទាំងរដ្ឋបាល ឆ្មាំ និងអ្នកសួរចម្លើយ។",
        DetailCE:"ទីតាំងឧក្រិដ្ឋកម្មទាំងបី (KR ពន្ធនាគារ M-13/ KR “ការិយាល័យសន្តិសុខ ស-២១”/ កន្លែងប្រតិបត្តិ ស-២១ “ជើងឯក”) មានទំនាក់ទំនងគ្នាយ៉ាងខ្លាំង។ នៅក្នុង M-13 ប្រធានមន្ទីរស-២១ កាំង ហ្កេកអឿ ហៅ ឌុច បានសាកល្បងវិធីសួរចម្លើយ និងការធ្វើទារុណកម្ម មុនពេលដែលក្រោយមកគាត់បានអនុវត្ត និងអភិវឌ្ឍបន្ថែមទៀតនៅស-២១។ បន្ទាប់​ពី​អ្នក​ទោស​ជា​ច្រើន​នាក់​ត្រូវ​បាន​គេ​សម្លាប់​ដំបូង​នៅ​ស-២១ ទីតាំង​ជើងឯក​នៅ​ក្រៅ​ទីក្រុង​ក្រោយមក​ត្រូវ​បាន​ជ្រើសរើស​ជា​កន្លែង​សមរម្យ​ជាង​សម្រាប់​ការ​ប្រហារ​ជីវិត។ ភាគច្រើននៃអ្នកទោស ស-២១ ជាង ១៨.០០០នាក់ ត្រូវបានសម្លាប់នៅជើងឯក។ដូចដែលវាអាចទៅរួចរហូតមកដល់សព្វថ្ងៃនេះ ដើម្បីការពារទីតាំងទាំងបី ពួកគេអាចតំណាងឱ្យការកើនឡើងនៃអំពើហិង្សា ដែលអាចជួយឱ្យយល់ថាតើការកើតឡើងដូចនៅជើងឯកអាចកើតឡើងយ៉ាងដូចម្តេច។ ទីតាំងទាំងបីគួរតែត្រូវបានគេមើលឃើញរួមគ្នាជាបណ្តុំតែមួយនៃកន្លែងរំលឹកសៀរៀលសម្រាប់ការចងចាំ និងការរៀនសូត្រប្រវត្តិសាស្ត្រ។ ពួកវាអាចតំណាងដោយភាពត្រឹមត្រូវ និងសុចរិតភាពខ្ពស់ដែលជាខ្សែសង្វាក់កាលប្បវត្តិនៃអំពើហិង្សាដ៏ធំបំផុត។ M-13 គឺជាពន្ធនាគារមួយក្នុងចំណោមពន្ធនាគារដំបូងដែលខ្មែរក្រហមបង្កើតឡើង មុនពេលពួកគេទទួលបានការគ្រប់គ្រងលើប្រទេសទាំងមូលក្នុងខែមេសា ឆ្នាំ 1975។ ទោះបីជាមានពន្ធនាគារបែបនេះផ្សេងទៀតនៅទូទាំងប្រទេសក៏ដោយ ប៉ុន្តែនេះគឺជាពន្ធនាគារតែមួយគត់ដែលត្រូវបានគេកំណត់អត្តសញ្ញាណ និងប្តូរទៅជា កន្លែងនៃការចងចាំ និងការរៀនសូត្រ។ ទោះបីជា M-13 ផ្លាស់ទីបីដងនៅក្នុងតំបន់ក៏ដោយ ប៉ុន្តែទីតាំងនេះនៅក្នុងភូមិព្រៃជ្រៅ គឺជាទីតាំងរបស់វាសម្រាប់រយៈពេលដ៏យូរបំផុត។ ឌុច ជាប្រធាន M-13 បានផ្លាស់មកភ្នំពេញ ហើយក្រោយមកត្រូវបានតែងតាំងជាប្រធាន ស-២១ (ដែលគេស្គាល់សព្វថ្ងៃថា TSGM) ហើយគេមិនដឹងថា តើ M-13 បន្តប្រតិបត្តិការពីឆ្នាំ ១៩៧៥-១៩៧៩ ដែរឬទេ។ ចំណែក​ជន​រង​គ្រោះ M-13 ក៏​មិន​ដឹង​ដែរ ។ ទោះយ៉ាងណាក៏ដោយ នៅខែមករា ឆ្នាំ១៩៧៩ វាត្រូវបានបោះបង់ចោលដោយខ្មែរក្រហមដែលដកថយ ហើយចាប់តាំងពីកាលបរិច្ឆេទនោះមិនត្រូវបានប្រើទៀតទេ ហើយទុកចោលទទេ។ ខណៈពេលដែលធម្មជាតិបានគ្របដណ្តប់បន្តិចម្តងៗលើភាគច្រើននៃអតីតដានពីលើដីក្នុងអំឡុងពេល 40 ឆ្នាំកន្លងមកនេះ គ្មានសកម្មភាពកសិកម្មណាមួយត្រូវបានធ្វើឡើងនៅទីនេះដើម្បីបំផ្លាញដានក្រោមដីនោះទេ។ លើសពីនេះ ចំណេះដឹងអំពី M-13 នៅតែមានភាពរស់រវើកនៅក្នុងភូមិជុំវិញ។",
        DetailSM:"SOSORO ត្រូវបានបង្កើតឡើងដើម្បីផ្តល់នូវទស្សនវិស័យពិសេសមួយលើប្រវត្តិសាស្រ្តរបស់ប្រទេស កម្ពុជា និងដើម្បីផ្តល់នូវការយល់ដឹងកាន់តែច្បាស់អំពីអន្តរកម្មថេររវាងប្រាក់ សេដ្ឋកិច្ច និងនយោបាយតាមរយៈប្រវត្តិសាស្ត្រ។ សារមន្ទី SOSORO មានទីតាំងនៅចំកណ្តាលរាជធានីភ្នំពេញ រាជធានីនៃប្រទេសកម្ពុជា។ អគាររចនាបទអាណាព្យាបាលរបស់វាគឺជាអតីតលំនៅដ្ឋានរបស់សាលាក្រុងក្នុងឆ្នាំ 1908 សាលាក្រុងភ្នំពេញក្នុងឆ្នាំ 1920 និងជាសារមន្ទីរសេដ្ឋកិច្ចនិងប្រាក់ព្រះស្រីឥសានវរ្ម័នតាំងពីឆ្នាំ 2012 ។ សារមន្ទីរ SOSORO ។ វាត្រូវបានសម្រេចរក្សានូវលក្ខណៈទាំងអស់ដែលអាចរក្សាទុកបាន ដើម្បីដាក់តាំងវត្ថុបុរាណ និងវត្ថុបុរាណតាំងពីសម័យនគរភ្នំ។",

        about_us_p1: "ប្រទេសកម្ពុជា គឺជាប្រទេសមួយស្ថិតនៅផ្នែកខាងត្បូងនៃឧបទ្វីបឥណ្ឌូចិន ក្នុងតំបន់អាស៊ីអាគ្នេយ៍។ ប្រទេសកម្ពុជាមានផ្ទៃក្រឡាសរុប ១៨១,០៣៥ គីឡូម៉ែត្រការ៉េ ដោយមានព្រំប្រទល់ជាប់នឹងប្រទេសថៃនៅភាគខាងលិចនិងពាយ័ព្យ ប្រទេសឡាវនៅភាគឦសាន្ត ប្រទេសវៀតណាមនៅភាគខាងកើត និងឈូងសមុទ្រថៃ​នៅភាគនិរតី។ រាជធានី និងទីក្រុងធំបំផុតក្នុងប្រទេសគឺ រាជធានីភ្នំពេញ។",
        about_us_p2: "ដោយមានប្រជាជន​ជាង ១៦ លាននាក់ កម្ពុជាស្ថិតក្នុងលំដាប់ទី៧២​ក្នុង​​លោក ទី២៧ក្នុងទ្វីបអាស៊ី និងទី៧ក្នុងអាស៊ីអាគ្នេយ៍។ ប្រជាជនជិតពាក់កណ្តាលប្រមូលផ្តុំកុះករនៅតំបន់វាលរាប ទំហំប្រហែល ១៤% នៃផ្ទៃសរុប។ សាសនាជាផ្លូវការ គឺ ព្រះពុទ្ធសាសនាថេរវាទ ដែលកាន់ដោយប្រជាជនប្រហែល ៩០%។ ជន​ជាតិ​ភាគ​តិច​ក្នុង​ប្រទេស​នេះ រួមមាន: ជនជាតិវៀតណាម ចិន ចាម និង​កុលសម្ព័ន្ធភ្នំ ៣០ ជនជាតិផ្សេងៗ​ទៀត។ រាជធានី​ និង ទីក្រុង​ធំ​បំផុតគឺ ​ភ្នំពេញ ដែលជា​មជ្ឈមណ្ឌល​នយោបាយ សេដ្ឋកិច្ច និង ​វប្បធម៌​នៃ​កម្ពុជា។ កម្ពុជាជារដ្ឋឯកភាព ក្រោមរបបរាជាធិបតេយ្យអាស្រ័យរដ្ឋធម្មនុញ្ញ​ និងរបបរដ្ឋសភាប្រជាធិបតេយ្យ ដែលមានព្រះបាទនរោត្តម សីហមុនី ជ្រើសតាំងដោយក្រុមប្រឹក្សារាជសម្បត្តិ ជាព្រះមហាក្សត្រ​ និងជាព្រះប្រមុខរដ្ឋ។ ប្រមុខរាជរដ្ឋាភិបាល មានហ៊ុន សែន ជានាយករដ្ឋមន្ត្រី ជាមេដឹកនាំដែលកាន់តំណែងយូរបំផុតនៅ​អាស៊ី​អាគ្នេយ៍​ ដែលបានដឹកនាំប្រទេសកម្ពុជាអស់រយៈពេលជាង ​៣០ ឆ្នាំមក​ហើយ។ ឯមេដឹកនាំចលនាប្រឆាំងនិងដែលមានប្រជាប្រិយបំផុតក្នុងសង្គមខ្មែរគឺ សម-រង្សុី ដែលធ្លាប់បានជាប់ជាតំណាងរាស្រ្តនៃនីតិកាលទី១ ឆ្នាំ១៩៩៣ មក។"
    },
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n