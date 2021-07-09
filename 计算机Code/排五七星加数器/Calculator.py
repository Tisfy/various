import tkinter as tk
import CheckNetwork

__exeName__ = "006_57LotteryCounter"
__exeVersion__ = 1

"""
;下面的注释包含自解压脚本命令

Setup=Calculator.exe
Text
{
绿色安装，附加任务：创建桌面快捷方式。此外无其他盘符占用 
}
Shortcut=D, Calculator.exe, , 双击运行, 排列五七星计数器, Img/icon.ico

"""

# CheckNetwork.main(__exeName__, __exeVersion__)  # FIXME: 取消注释

window = tk.Tk()
window.title("排五计数器")
window.geometry("900x675")
window.iconbitmap('Img/icon.ico')
window.resizable(0, 0)

img, img_label = '', ''


def pack_img(img_name, tx, ty):
    global img, img_label
    img = tk.PhotoImage(file=img_name)
    img_label = tk.Label(window, image=img)
    img_label.place(x=tx, y=ty)


# 左数字框架
frame_nums_height, frame_nums_width = 575, 600
frame_nums_x, frame_nums_y = 50, 50
frame_nums = tk.Frame(window, bg="pink", height=f"{frame_nums_height}", width=f"{frame_nums_width}")
frame_nums.place(x=frame_nums_x, y=frame_nums_y)
frame_dic = {}
for x in range(10):  # 10行
    for y in range(10):  # 10列
        this_frame = tk.Frame(frame_nums, bg="blue" if (x + y) % 2 else "yellow", width=f"{int(frame_nums_width / 10)}",
                              height=f"{int(frame_nums_height / 10)}")
        this_frame.place(x=frame_nums_width / 10 * x, y=frame_nums_height / 10 * y)
        label_text_up = tk.Label(this_frame, text=f"{y}{x}", font=('Arial', 14), fg="black", width=5, height=1)
        label_text_up.pack()
        this_value = 0
        label_text_down = tk.Label(this_frame, text=f"{this_value}", font=('Arial', 14), fg="red", width=5, height=1)
        label_text_down.pack(side=tk.BOTTOM)
        frame_dic[(x, y)] = (this_frame, label_text_up, label_text_down, this_value)

# 右操作框架
frame_operate_height, frame_operate_width = 300, 175
frame_operate_x, frame_operate_y = 685, 200
frame_operate = tk.Frame(window, bg="pink", height=frame_operate_height, width=frame_operate_width)
frame_operate.place(x=frame_operate_x, y=frame_operate_y)
# 头
frame_operate_head = tk.Frame(frame_operate, bg="blue", height=frame_operate_height/4, width=frame_operate_width)
frame_operate_head.place(x=0, y=0)
frame_operate_head_text = tk.Label(frame_operate_head, text="头：", font=('Arial', 14), fg="black", width=7, height=3, bg="red")
frame_operate_head_text.place(x=0, y=0)
frame_operate_head_input = tk.Entry(frame_operate_head, bg="gold", font=('Arial', 14), width=9)
frame_operate_head_input.place(x=55, y=23)
# 尾
frame_operate_tail = tk.Frame(frame_operate, bg="yellow", height=frame_operate_height/4, width=frame_operate_width)
frame_operate_tail.place(x=0, y=frame_operate_height/4)
# 值输入框
frame_operate_input = tk.Frame(frame_operate, bg="blue", height=frame_operate_height/4, width=frame_operate_width)
frame_operate_input.place(x=0, y=frame_operate_height/4*2)
# 确定按钮
frame_operate_button = tk.Frame(frame_operate, bg="yellow", height=frame_operate_height/4, width=frame_operate_width)
frame_operate_button.place(x=0, y=frame_operate_height/4*3)

# 事件绑定
quit = lambda event: window.quit() if event.keysym == "Escape" else ""
window.bind("<Key>", quit)
window.mainloop()
