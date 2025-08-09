import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DunkCalculatorGuideZh() {
    return (
        <section id="guide">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-center">
                        扣篮计算器终极使用指南
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8 space-y-6 text-base text-foreground/90">
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">引言：什么是扣篮计算器？</h2>
                        <p>扣篮计算器是一种专门的工具，旨在帮助篮球运动员和爱好者确定他们是否具备在标准的10英尺篮筐上扣篮的身体能力。通过输入身高、站立摸高和垂直弹跳等关键指标，扣篮计算器可以精确分析您当前的能力以及您需要改进哪些方面才能实现篮球中最激动人心的动作之一。本指南将引导您了解使用扣篮计算器、理解结果以及为最终完成扣篮而进行训练所需的一切。</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">为什么要使用扣篮计算器？</h2>
                        <p>扣篮的梦想在篮球运动员中是普遍的，但它常常感觉像一个模糊的目标。扣篮计算器通过将其分解为可衡量的组成部分来揭开这个目标的神秘面纱。这就是为什么它是一个宝贵的工具：</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>清晰度和目标设定：</strong>它提供了一个清晰的数字目标。您将知道您需要为您的垂直弹跳增加确切的3英寸，而不仅仅是“跳得更高”。</li>
                            <li><strong>激励：</strong>看到自己有多接近可以成为一个强大的激励因素。进度条将您的旅程可视化，并鼓励您继续训练。</li>
                            <li><strong>智能训练：</strong>通过了解您需要改进的具体指标，您可以调整您的锻炼方案，使其更有效，重点关注爆发力或力量等领域。</li>
                            <li><strong>现实的期望：</strong>它帮助您设定现实的期望。虽然几乎任何人都可以提高他们的垂直弹跳，但计算器可以帮助您了解根据您身体的自然属性所需的承诺。</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">了解关键指标</h2>
                        <p>要从任何扣篮计算器中获得准确的结果，您需要提供准确的输入。让我们分解三个核心组成部分：</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. 身高</h3>
                        <p>这是您不穿鞋的标准身高。虽然它是一个促成因素，但它不如您的站立摸高重要。两个相同身高的人可以有截然不同的臂长，因此站立摸高也不同。</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. 站立摸高</h3>
                        <p>这可以说是最关键的测量。您的站立摸高是您在双脚平放站立时用一只手能达到的高度。要准确测量它：</p>
                        <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>双脚平放在地上，站在墙边。</li>
                            <li>用一只手尽可能高地伸直手臂。</li>
                            <li>让朋友标记您指尖触及的最高点，或者自己用粉笔或铅笔做一个轻微的标记。</li>
                            <li>测量从地板到标记的距离。那就是您的站立摸高。</li>
                        </ol>
                        <p className="mt-2">如果您没有办法测量这个，我们的扣篮计算器可以根据您的身高为您估算，使用一个常见的乘数（大约是您身高的1.31倍），但直接测量总是更准确。</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">3. 垂直弹跳</h3>
                        <p>这衡量您的爆发性跳跃能力。它是您的站立摸高和最大跳跃摸高之间的差值。要测量您的垂直弹跳：</p>
                         <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>如上所述进行站立摸高测试以获得您的基线。</li>
                            <li>从站立开始，尽可能高地跳起来，在跳跃的最高点触摸墙壁。标记这个点。</li>
                            <li>您的站立摸高标记和跳跃摸高标记之间的垂直距离就是您的垂直弹跳。</li>
                        </ol>
                        <p className="mt-2">为了获得最准确的结果，进行几次跳跃并取最好的一次。确保您为计算器的目的使用“无步”垂直弹跳。</p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">扣篮计算器的工作原理：魔术背后的数学</h2>
                        <p>计算本身很简单。目标是确定您的“最大跳跃摸高”并将其与“目标扣篮高度”进行比较。</p>
                        <p className="mt-2"><strong className="font-semibold">最大跳跃摸高 = 站立摸高 + 垂直弹跳</strong></p>
                        <p className="mt-2">然而，仅仅到达篮筐是不够的。要成功扣篮，您需要将手明显地越过篮筐以控制球并将其强行穿过篮筐。一个好的经验法则是，您需要大约<strong className="font-semibold">篮筐上方6英寸的净空。</strong></p>
                        <p className="mt-2">标准的NBA、FIBA和NCAA篮球筐离地10英尺（120英寸或305厘米）。</p>
                        <p className="mt-2"><strong className="font-semibold">目标扣篮高度 = 篮筐高度（120英寸） + 扣篮净空（6英寸） = 126英寸</strong></p>
                        <p className="mt-2">我们的扣篮计算器使用这个公式：它计算您的最大跳跃摸高，并告诉您它是否达到或超过126英寸的目标扣篮高度。如果您达不到，它会计算差值，准确地告诉您需要为您的垂直弹跳增加多少。</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">解读您的结果和后续步骤</h2>
                        <p>在您输入您的数据并点击“计算”后，您将得到两个结果之一：</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">结果1：恭喜，您可以扣篮！</h3>
                        <p>如果您的最大摸高超过126英寸，扣篮计算器会给您绿灯。这意味着，从身体上讲，您有跳跃的能力。现在，就是将这种潜力转化为技能。练习把握您的起跳时机，单手抓球（如果可能的话），并协调您的跳跃以成功地在篮筐处完成动作。</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">结果2：您很接近！这是您需要的。</h3>
                        <p>如果您还没有达到，不要气馁！这正是扣篮计算器的真正价值所在。它会告诉您需要为您的垂直弹跳增加的确切英寸数。这成为您新的训练目标。例如，如果它说您需要再增加4英寸，那么您的整个训练重点就应该放在一个旨在将您的垂直弹跳增加该数量的计划上。</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">提高您垂直弹跳的基本训练计划</h2>
                        <p>实现您的扣篮目标需要一个专门的训练计划，重点是建立您腿部和核心的爆发力。这涉及两种主要类型的训练：</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. 力量训练（基础）</h3>
                        <p>没有坚实的基础，您就无法爆发。专注于复合运动，这些运动可以锻炼您下半身和核心的多个肌肉群。</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>深蹲：</strong>腿部练习之王。杠铃后蹲可以增强您股四头肌、臀大肌和腿筋的原始力量。</li>
                            <li><strong>硬拉：</strong>发展您的整个后链（腿筋、臀大肌、下背部），这对跳跃力至关重要。</li>
                            <li><strong>弓步：</strong>非常适合单腿力量和稳定性，模仿单脚起跳动作。</li>
                            <li><strong>提踵：</strong>不要忽视您的小腿；它们在跳跃中提供最后的推动力。</li>
                        </ul>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. 增强式训练（爆发力）</h3>
                        <p>增强式训练训练您的肌肉在最短的时间内产生最大的力量——这正是垂直弹跳的定义。</p>
                         <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>跳箱：</strong>跳上一个稳定的箱子或平台。专注于轻柔着陆并向上爆发。</li>
                            <li><strong>跳深：</strong>从一个低箱子上跳下，着陆后立即尽可能高地跳起来。这可以训练您肌肉的伸展-缩短周期。</li>
                            <li><strong>抱膝跳：</strong>垂直跳起，将膝盖带到胸前。</li>
                            <li><strong>跳绳：</strong>一种简单但有效的提高协调性和步法的方法。</li>
                        </ul>
                         <p className="mt-4"><strong className="font-semibold">重要提示：</strong>始终优先考虑正确的姿势以防止受伤。如果您是这些练习的新手，请考虑与教练一起工作。休息和恢复与训练本身同样重要。给您的肌肉时间来修复和变得更强壮。</p>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">结论：从计算到现实</h2>
                        <p>扣篮计算器不仅仅是一个有趣的工具；它是一张路线图。它将扣篮的抽象梦想转化为一个具体、可实现的目标。通过为您提供精确的数据，它使您能够更智能地训练，保持动力，并有效地跟踪您的进度。输入您的数据，了解您的目标，并致力于一个持续的训练计划。凭借奉献精神和正确的方法，扣篮计算器可以成为您飞越篮筐之旅的第一步。</p>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
