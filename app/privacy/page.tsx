import React from 'react';
// app/privacy/page.tsx

import fs from 'fs';
import path from 'path';

const PrivacyPolicyPage = () => {
  // publicディレクトリにあるprivacy.txtファイルへのパスを構築
    const filePath = path.join(process.cwd(), 'public', 'privacy', 'privacy.txt');

    // ファイルを読み込む
    const privacyPolicyText = fs.readFileSync(filePath, 'utf8');

    return (
        <div style={{ backgroundColor: 'gray', minHeight: '100vh', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', borderRadius: '0.375rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', padding: '2rem' }}>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'black', marginBottom: '1.5rem', fontFamily: "Shippori Mincho, serif" }}>
            プライバシーポリシー
            </h1>
            {/* テキスト内の改行を<br />に変換して表示 */}
            {/* <div style={{ color: '#333333', fontFamily: "Noto Sans JP, sans-serif", lineHeight: '1.75' }}>
            {privacyPolicyText.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                {line}
                <br />
                </React.Fragment>
            ))}
            </div> */}
            <p>
            墓石クリーニングサービス「リストーンワークス」（以下、「本サービス」といいます）において取得する個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
            </p>
            <ul>
                <li>1. 個人情報の取得と利用目的  
                    <p>当社は、お問い合わせへの対応、サービス提供、お客様へのご連絡、業務の円滑な遂行のために、氏名、住所、電話番号、メールアドレス等の個人情報を取得・利用いたします。
                    </p>
                </li>
                <li>2. 個人情報の第三者提供について  
                    <p>当社は、法令に基づく場合を除き、事前の同意なく第三者に個人情報を提供することはありません。
                    </p>
                </li>
                <li>3. 個人情報の管理について  
                    <p>当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じ、厳重に管理いたします。
                    </p>
                </li>
                <li>4. 個人情報の開示・訂正・削除について   
                    <p>お客様からご自身の個人情報について開示・訂正・削除等の請求があった場合は、速やかに対応いたします。
                    </p>
                </li>
                <li>5. LINE公式アカウントを通じた情報取得について  
                    <p>本サービスの公式LINEアカウントを通じて取得した情報（LINE名・ID、トーク履歴等）を、お問い合わせ対応および業務管理目的においてのみ利用いたします。取得した情報は適切に管理し、第三者に提供することはありません。
                    </p>
                </li>
                <li>6. プライバシーポリシーの変更  
                    <p>本ポリシーは、法令の変更や業務内容の変更等により、予告なく変更されることがあります。変更後の内容は、本ウェブサイト上に掲載した時点で効力を有します。
                    </p>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default PrivacyPolicyPage;