import type { NextApiRequest, NextApiResponse } from "next";

const data ={
    EN:["Year 2 SMU student","Yee Ming Tan","Certified in Red Hat System Administrator + Cybersecurity", "Lillyn Teh Endeavour Scholar"],

    CN:["新加坡管理大二学生","陈奕敏","红帽认证技师员 + 网络安全专业认证","郑莉莲殚力学者"],

    TH:["นักเรียนปี 2 ที่ มหาลัย SMU","ตะน ยีมิง"," ผู้ดูแลระบบที่ผ่านการรับรอง(Red Hat) + ประกาศนียบัตรความปลอดภัยทางไซเบอร์","นักวิชาการบุญ"],

    JP: ["シンガポール管理大学校二年生","タン イーミン"," システム管理取得 + サイバーセキュリティ経験","リリン・テー 努力学者"]

};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lang } = req.query;
  const content = data[lang as keyof typeof data] || data.EN;
  res.status(200).json({ content });
}
